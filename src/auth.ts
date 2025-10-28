import NextAuth from "next-auth";
import Apple, { type AppleProfile } from "next-auth/providers/apple";

const { AUTH_APPLE_ID, AUTH_APPLE_SECRET } = process.env;

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Apple({
      clientId: AUTH_APPLE_ID!,
      clientSecret: AUTH_APPLE_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log("--------------------------------");
      console.log("account :", account);
      console.log("--------------------------------");
      console.log("profile", profile);
      console.log("--------------------------------");
      console.log("user", user);
      console.log("--------------------------------");
      return true;
    },
  },
});
