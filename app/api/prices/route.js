import { stripe } from "../../../helpers/stripe";

export const GET = async () => {
  const prices = await stripe.prices.list();
};
