import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

if (!process.env.GOOGLE_AUTH_CLIENTID || !process.env.GOOGLE_AUTH_CLIENTSECRET) {
    throw new Error("error");
}

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_AUTH_CLIENTID,
      clientSecret: process.env.GOOGLE_AUTH_CLIENTSECRET
    }),
  ],
  secret: process.env.NEXT_AUTH_SECRET,
});

export { handler as GET, handler as POST };
