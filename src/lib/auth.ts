import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

function getAllowedEmails(): Set<string> {
  const raw = process.env.ALLOWED_EMAILS ?? "";
  return new Set(
    raw
      .split(",")
      .map((e) => e.trim().toLowerCase())
      .filter(Boolean)
  );
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      if (!user.email) return false;
      const allowed = getAllowedEmails();
      if (allowed.size === 0) return true;
      return allowed.has(user.email.toLowerCase());
    },
    async session({ session }) {
      return session;
    },
  },
  pages: {
    error: "/",
  },
});

export function isEmailAllowed(email: string | null | undefined): boolean {
  if (!email) return false;
  const allowed = getAllowedEmails();
  if (allowed.size === 0) return true;
  return allowed.has(email.toLowerCase());
}
