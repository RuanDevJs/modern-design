import { stripe } from "@/lib/stripe";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const priceId = req.body.priceId as string;

  if (!priceId || priceId === null) {
    return res.status(400).json({ message: "Missing Default Price Id" });
  }

  const successUrl = "http://localhost:3000/succes";
  const cancelUrl = "http://localhost:3000/";

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: "payment",
    locale: "pt-BR",
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
  });

  return res.status(201).json({ checkoutUrl: checkoutSession.url });
}
