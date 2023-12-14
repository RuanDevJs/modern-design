import Stripe from "stripe";

const apikey = process.env.PRIVATE_KEY || "";

export const stripe = new Stripe(apikey, {
  appInfo: {
    name: "Modern Design",
  },
});
