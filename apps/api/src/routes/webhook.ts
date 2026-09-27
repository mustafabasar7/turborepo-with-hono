import crypto from "node:crypto";
import { Hono } from "hono";
import { db } from "@repo/db";
import {
  sendAdminNotification,
  sendWelcomeEmail,
} from "../lib/email.js";

const webhook = new Hono();

webhook.post("/api/webhook/lemonsqueezy", async (c) => {
  const secret = process.env.LEMONSQUEEZY_WEBHOOK_SECRET;
  if (!secret) return c.json({ error: "Webhook secret not set" }, 500);

  const rawBody = await c.req.text();
  const signature = Buffer.from(c.req.header("X-Signature") ?? "", "utf8");

  const hmac = Buffer.from(
    crypto.createHmac("sha256", secret).update(rawBody).digest("hex"),
    "utf8"
  );

  if (signature.length === 0 || !crypto.timingSafeEqual(hmac, signature)) {
    return c.json({ error: "Invalid signature" }, 401);
  }

  const payload = JSON.parse(rawBody) as {
    meta: { event_name: string };
    data: {
      id: string;
      attributes: {
        customer_id: number;
        variant_id: number;
        order_id: number;
        user_email: string;
        user_name: string;
        status: string;
        variant_name: string;
        trial_ends_at: string | null;
        renews_at: string | null;
        ends_at: string | null;
      };
    };
  };

  const event = payload.meta.event_name;
  const attr = payload.data.attributes;
  const lsSubscriptionId = String(payload.data.id);

  if (event === "subscription_created") {
    await db.subscription.create({
      data: {
        lsSubscriptionId,
        lsCustomerId: String(attr.customer_id),
        lsVariantId: String(attr.variant_id),
        lsOrderId: String(attr.order_id),
        email: attr.user_email,
        name: attr.user_name,
        status: attr.status,
        planName: attr.variant_name,
        planSlug: attr.variant_name.toLowerCase().replace(/\s+/g, "-"),
        trialEndsAt: attr.trial_ends_at ? new Date(attr.trial_ends_at) : null,
        renewsAt: attr.renews_at ? new Date(attr.renews_at) : null,
        endsAt: attr.ends_at ? new Date(attr.ends_at) : null,
      },
    });

    await Promise.all([
      sendWelcomeEmail({
        to: attr.user_email,
        name: attr.user_name,
        plan: attr.variant_name,
        lsSubscriptionId,
      }),
      sendAdminNotification({
        email: attr.user_email,
        name: attr.user_name,
        plan: attr.variant_name,
        lsSubscriptionId,
      }),
    ]);
  }

  if (
    event === "subscription_updated" ||
    event === "subscription_cancelled" ||
    event === "subscription_expired"
  ) {
    await db.subscription.updateMany({
      where: { lsSubscriptionId },
      data: {
        status: attr.status,
        renewsAt: attr.renews_at ? new Date(attr.renews_at) : null,
        endsAt: attr.ends_at ? new Date(attr.ends_at) : null,
      },
    });
  }

  return c.json({ ok: true });
});

export default webhook;
