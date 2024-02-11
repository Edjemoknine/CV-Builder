const { getServerSession } = require("next-auth");

import { redirect } from "next/navigation";
// import { authOptions } from "../api/auth/[...nextauth]/route";
import { PrismaClient } from "@prisma/client";
import { authOptions } from "./authOptions";
const prisma = new PrismaClient();

const mustBeLoggedIn = async () => {
  const session = await getServerSession(authOptions);
  const user = await prisma.user.findFirst({
    where: {
      email: session?.user.email,
    },
  });
  if (session) {
    console.log("User is logged in");
    return user;
  } else {
    redirect("/sign-in");
  }
};

export default mustBeLoggedIn;
