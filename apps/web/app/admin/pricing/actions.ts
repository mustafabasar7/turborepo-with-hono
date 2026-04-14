"use server";

import { db } from "@repo/db";
import { revalidatePath } from "next/cache";

export interface PricingUpdateData {
  name: string;
  description: string;
  monthlyUsd: number | null;
  yearlyUsd: number | null;
  lsVariantMonthly: string | null;
  lsVariantYearly: string | null;
  isPopular: boolean;
  isSelfServe: boolean;
  isActive: boolean;
  sortOrder: number;
  features: string[];
}

export async function upsertPricingConfig(slug: string, data: PricingUpdateData) {
  await db.pricingConfig.upsert({
    where: { slug },
    update: { ...data, updatedAt: new Date() },
    create: { slug, ...data, updatedAt: new Date() },
  });
  revalidatePath("/admin/pricing");
}
