import { NextAuthOptions } from "next-auth"
import { SanityAdapter, SanityCredentials } from "next-auth-sanity";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import sanityClient from "./sanity";

export const authOptions: NextAuthOptions = {
    providers: [
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID as string,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        SanityCredentials(sanityClient),
    ],
    session: {
        strategy: 'jwt',
    },
    adapter: SanityAdapter(sanityClient),
    debug: process.env.NODE_ENV === 'development',
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {}
}