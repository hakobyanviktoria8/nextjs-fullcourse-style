import NextAuth from "next-auth"
import Providers from 'next-auth/providers'

export default NextAuth({
  providers: [
    Providers.GItHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
})