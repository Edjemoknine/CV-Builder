import { getServerSession } from "next-auth";
import { authOptions } from "../app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { subscriptionTable } from "./subscriptionTable";
import { stripe } from "./stripe";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getUserSubscriptionPlan = async () => {
  const session = await getServerSession(authOptions);
  //   console.log({ session });
  if (!session || !session.user) return redirect("/sign-in");

  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });
  console.log(user);
  //   if (!user) throw new Error("User not found");

  const isSubscribed =
    user.stripePriceId &&
    user.stripeCurrentPeriodEnd &&
    user.stripeCurrentPeriodEnd.getTime() + 86400000 > Date.now();

  const plan = isSubscribed
    ? subscriptionTable.find((p) => p.stripePriceId === user.stripePriceId)
    : null;

  let isCanceled = false;
  if (isSubscribed && user.stripeSubscriptionId === plan.stripeSubscriptionId) {
    const stripePlan = await stripe.subscriptions.retrieve(
      user.stripeSubscriptionId
    );
    isCanceled = stripePlan.cancel_at_period_end;
  }
  return {
    ...plan,
    stripeSubscriptionId: user.stripeSubscriptionId,
    stripeCurrentPeriodEnd: user.stripeCurrentPeriodEnd,
    stripeCustomerId: user.stripeCustomerId,
    isSubscribed,
    isCanceled,
  };
};
