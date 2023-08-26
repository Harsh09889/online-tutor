import { DefaultSession, NextAuthOptions } from "next-auth"
import { prisma } from "./db"
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GoogleProvider from 'next-auth/providers/google'
import EmailProvider from 'next-auth/providers/email'

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: {
      id: number;
      credits: number;
    } & DefaultSession['user']
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: number;
    credits: number;
  }
}

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  callbacks: {
    jwt: async ({ token }) => {
      const db_user = await prisma.user.findFirst({
        where: {
          email: token.email,
        },
      })
      if (db_user) {
        token.id = db_user.id,
        token.credits = db_user.credits
      }
      return token
    },
    session: ({session, token}) => {
      if (token) {
        session.user.id = token.id
        session.user.name = token.name
        session.user.email = token.email
        session.user.credits = token.credits
        session.user.image = token.picture
      }
      return session
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
  adapter: PrismaAdapter(prisma),
  providers: [GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID as string,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
  }), EmailProvider({})]
}
