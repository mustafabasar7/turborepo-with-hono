import { NextRequest, NextResponse } from "next/server";
import { createRequire } from "module";
import { v4 as uuidv4 } from "uuid";

// iyzipay CommonJS modülü
const require = createRequire(import.meta.url);
const Iyzipay = require("iyzipay");

const iyzipay = new Iyzipay({
  apiKey: process.env.IYZICO_API_KEY ?? "",
  secretKey: process.env.IYZICO_SECRET_KEY ?? "",
  uri: process.env.IYZICO_BASE_URL ?? "https://sandbox-api.iyzipay.com",
});

interface CheckoutRequest {
  planReferenceCode: string;
  name: string;
  surname: string;
  email: string;
  gsmNumber: string;
}

function initializeCheckoutForm(params: object): Promise<{
  status: string;
  token: string;
  checkoutFormContent: string;
}> {
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (iyzipay.subscriptionCheckoutForm as any).initialize(
      params,
      (err: unknown, result: { status: string; token: string; checkoutFormContent: string }) => {
        if (err) return reject(err);
        resolve(result);
      }
    );
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as CheckoutRequest;
    const { planReferenceCode, name, surname, email, gsmNumber } = body;

    if (!planReferenceCode || !name || !surname || !email) {
      return NextResponse.json(
        { error: "Eksik bilgi. Ad, soyad ve e-posta zorunludur." },
        { status: 400 }
      );
    }

    const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3002";

    const result = await initializeCheckoutForm({
      locale: "tr",
      conversationId: uuidv4(),
      callbackUrl: `${appUrl}/payment/success`,
      pricingPlanReferenceCode: planReferenceCode,
      subscriptionInitialStatus: "ACTIVE",
      customer: {
        name,
        surname,
        identityNumber: "11111111111", // sandbox zorunlu alan
        email,
        gsmNumber: gsmNumber || "+905555555555",
        billingAddress: {
          contactName: `${name} ${surname}`,
          city: "Istanbul",
          district: "Kadikoy",
          country: "Turkey",
          address: "Türkiye",
          zipCode: "34000",
        },
        shippingAddress: {
          contactName: `${name} ${surname}`,
          city: "Istanbul",
          district: "Kadikoy",
          country: "Turkey",
          address: "Türkiye",
          zipCode: "34000",
        },
      },
    });

    if (result.status !== "success") {
      return NextResponse.json(
        { error: "Ödeme formu oluşturulamadı" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      token: result.token,
      checkoutFormContent: result.checkoutFormContent,
    });
  } catch (error) {
    console.error("Iyzico checkout error:", error);
    return NextResponse.json(
      { error: "Ödeme başlatılamadı" },
      { status: 500 }
    );
  }
}
