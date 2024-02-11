import NextAuth from "next-auth";
import { PrismaClient } from "@prisma/client";
import { authOptions } from "../../../lib/authOptions";

const prisma = new PrismaClient();

const authHandler = NextAuth(authOptions);

export { authHandler as GET, authHandler as POST };
