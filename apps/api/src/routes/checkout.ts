import { Hono } from "hono";
import { cors } from "hono/cors";

const checkout = new Hono();

checkout.use(
  "/api/checkout",
  cors({
    origin: [process.env.LANDING_URL ?? "https://yapiplan.com"],
    allowMethods: ["POST", "OPTIONS"],
    allowHeaders: ["Content-Type"],
  })
);

checkout.post("/api/checkout", async (c) => {
  const { variantId, email } = await c.req.json<{
    variantId: string;
    email?: string;
  }>();

  const apiKey = process.env.LEMONSQUEEZY_API_KEY;
  const storeId = process.env.LEMONSQUEEZY_STORE_ID;
  if (!apiKey || !storeId) return c.json({ error: "LS config missing" }, 500);

  const body = {
    data: {
      type: "checkouts",
      attributes: {
        checkout_options: {
          locale: "tr",
        },
        product_options: {
          redirect_url: `${process.env.LANDING_URL ?? "https://yapiplan.com"}/tesekkurler`,
        },
        checkout_data: {
          email: email ?? undefined,
          custom: { source: "landing" },
        },
      },
      relationships: {
        store: { data: { type: "stores", id: storeId } },
        variant: { data: { type: "variants", id: variantId } },
      },
    },
  };

  const res = await fetch("https://api.lemonsqueezy.com/v1/checkouts", {
    method: "POST",
    headers: {
      Accept: "application/vnd.api+json",
      "Content-Type": "application/vnd.api+json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) return c.json({ error: "Checkout creation failed" }, 502);
  const data = (await res.json()) as { data: { attributes: { url: string } } };
  return c.json({ checkoutUrl: data.data.attributes.url });
});

export default checkout;
