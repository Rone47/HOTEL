import { signUpHandler } from 'next-auth-sanity';

import sanityClient from '@/libs/sanity';

// Example adjustment
export const POST = signUpHandler(sanityClient as SanityClient);
