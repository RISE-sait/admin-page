import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

if (!process.env.ClientId || !process.env.ClientSecret) {
    throw new Error("error");
}

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.ClientId,
      clientSecret: process.env.ClientSecret
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };