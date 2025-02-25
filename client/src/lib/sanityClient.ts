import  createClient  from '@sanity/client';
import imageBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION!,
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
})

const builder = imageBuilder(client);

export const urlFor = (source : SanityImageSource) => builder.image(source).url()