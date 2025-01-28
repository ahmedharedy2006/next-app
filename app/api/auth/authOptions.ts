import { prisma } from "@/prisma/client";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcrypt";

export const AuthOptions: NextAuthOptions =  {
    adapter: PrismaAdapter(prisma),
    providers: [
        Credentials({
            name: "Credentials",
            credentials: {
              email: { label: "Email", type: "email", placeholder: "Enter Email" },
              password: { label: "Password", type: "password" }
            },
            async authorize (credentials) {
              if (!credentials?.email || !credentials?.password) {
                return null;
              }
      
              const user = await prisma.user.findUnique({
                where: { email: credentials.email }
              });
      
              if (!user) {
                return null;
              }
      
              const isValid = await bcrypt.compare(credentials.password, user.hashedPassword!);
      
              if (!isValid) {
                return null;
              }
      
              return user;
            }
          }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    
        })
    ],
    session: {
        strategy: "jwt"
    }
    };