import  createClient  from '@sanity/client';
import imageBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const client = createClient({
    projectId: 'iegyaep7',
    dataset: 'production',
    apiVersion: '2025-02-19',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
})

const builder = imageBuilder(client);

export const urlFor = (source : SanityImageSource) => builder.image(source).url()