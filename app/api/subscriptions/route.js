import { NextResponse } from "next/server";
import { stripe } from "../../../helpers/stripe";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/authOptions";

const prisma = new PrismaClient();

export const POST = async (req) => {
  const Usersession = await getServerSession(authOptions);
  const { priceId, customerId, plan } = await req.json();

  //   console.log(data);
  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    customer: customerId,
    payment_method_types: ["card"],
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    success_url: "http://localhost:3000/pricing",
    cancel_url: "http://localhost:3000/pricing",
  });
  await prisma.user.update({
    where: {
      email: Usersession?.user.email,
    },
    data: {
      plan: plan,
    },
  });

  //   console.log(session);

  return NextResponse.json({ url: session.url });
};
