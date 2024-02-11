import { getServerSession } from "next-auth";
import Stripe from "stripe";
// import { authOptions } from "../app/api/auth/[...nextauth]/route";
import { PrismaClient } from "@prisma/client";
import { authOptions } from "../lib/authOptions";

const prisma = new PrismaClient();

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "", {
  apiVersion: "2023-10-16",
});

export const hasSubscription = async () => {
  const session = await getServerSession(authOptions);
  if (session) {
    const user = await prisma.user.findFirst({
      where: {
        email: session.user?.email,
      },
    });
    const subscription = await stripe.subscriptions.list({
      customer: user.stripeCustomerId,
    });

    return subscription.data.length > 0;
  }
  return false;
};

// const createCheckoutLink = async () => {};

export const createCustomerIfNull = async () => {
  const session = await getServerSession(authOptions);
  if (session) {
    const user = await prisma.user.findFirst({
      where: {
        email: session.user?.email,
      },
    });
    if (!user.stripeCustomerId) {
      const customer = await stripe.customers.create({
        email: user?.email,
      });
      // console.log(customer);
      // console.log(user);
      await prisma.user.update({
        where: {
          email: customer.email,
        },
        data: {
          stripeCustomerId: customer.id,
        },
      });
    }
    const user2 = await prisma.user.findFirst({
      where: {
        email: session.user?.email,
      },
    });
    return user2?.stripeCustomerId;
  }
};
