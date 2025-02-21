import { client } from "@/lib/sanityClient";
import { Header } from "@/types/Header";

export const getHeader = async ():Promise<Header> => {
    const headerQuery = '*[_type == "header"]';
    const header: Header = await client.fetch(headerQuery);

    return header;
}