"use server";

import { stripe } from "../../helpers/stripe";
export const manageSubscriptionsAction = async ({
  isSubscribed,
  isCurrentPlan,
  stripeCustomerId,
  stripePriceId,
  userId,
}) => {
  console.log({ stripePriceId });
  if (isCurrentPlan && isSubscribed && stripeCustomerId) {
    const stripeSession = await stripe.billingPortal.sessions.create({
      customerId: stripeCustomerId,
      return_url: "/",
    });
    return { url: stripeSession.url };
  }
  const subSession = await stripe.checkout.sessions.create({
    mode: "subscription",
    payment_method_types: ["card"],
    billing_address_collection: "auto",
    success_url: "http://localhost:3000",
    cancel_url: "http://localhost:3000",
    line_items: [
      {
        price: stripePriceId,
        quantity: 1,
      },
    ],
    metadata: {
      userId: userId,
    },
  });
  return {
    url: subSession.url,
  };
};
