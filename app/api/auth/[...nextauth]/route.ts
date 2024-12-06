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
  callbacks: {
    async jwt({ token, user, account }) {
      // Add user's email to the JWT token after authentication
      if (account && user) {
        token.email = user.email;

        // Exchange the email-based JWT with the server's JWT
        const response = await fetch(`localhost:5000/api/auth/exchange-jwt`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: token.email }),
        });

        if (response.ok) {
          const data = await response.json();
          token.serverJwt = data.jwt; // Attach the server-side JWT
        } else {
          console.error("Failed to exchange JWT with server");
        }
      }
      return token
    }
  }
});

export { handler as GET, handler as POST };
