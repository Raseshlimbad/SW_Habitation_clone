import { client } from "@/lib/sanityClient";
import { BlogType } from "@/types/Blog";
import { FooterType } from "@/types/Footer";
import { HeaderType } from "@/types/Header";
import { HeroSectionType } from "@/types/HeroSection";

export const getHeader = async (): Promise<HeaderType | null> => {
    try {
        const headerQuery = '*[_type == "header"][0]'; // Only fetch the first header
        const header: HeaderType = await client.fetch(headerQuery);

        if (!header) throw new Error("Header data not found!");

        return header;
    } catch (error) {
        console.error("Error fetching header data:", error);
        return null;
    }
};

export const getFooter = async (): Promise<FooterType | null> => {
    try {
        const footerQuery = '*[_type == "footer"][0]'; 
        const footer: FooterType = await client.fetch(footerQuery);

        if (!footer) throw new Error("Footer data not found!");

        return footer;
    } catch (error) {
        console.error("Error fetching footer data:", error);
        return null;
    }
};

export const getHeroSection = async (): Promise<HeroSectionType | null> => {
    try {
        const heroSectionQuery = '*[_type == "heroSection"][0]'; 
        const heroSection: HeroSectionType = await client.fetch(heroSectionQuery);

        if (!heroSection) throw new Error("heroSection data not found!");

        return heroSection;
    } catch (error) {
        console.error("Error fetching heroSection data:", error);
        return null;
    }
};


export async function getBlogSectionFix(): Promise<BlogType[]> {

    const query = `
    *[_type == "blog" && slug.current in [
      "what-is-jamstack?",
      "what-is-sanity.io?-a-beginner-friendly-guide",
      "how-to-install-astro?--a-step-by-step-installation-guide-for-beginners",
      "how-to-install-next.js-?-a-complete-guide-for-beginners"
    ]] {
      _id,
      title,
      slug,
      blogThumbnail,
      publishedAt,
      readingTime,
      author,
      authorImage,
      content
    }
  `;

    try {
      const blogs: BlogType[] = await client.fetch(query);
      return blogs;
    } catch (error) {
      console.error("Error fetching blogs:", error);
      return [];
    }
  }


  export async function getNewlyAddedBlogs(): Promise<BlogType[]> {
    const excludedSlugs = [
      "what-is-jamstack?",
      "what-is-sanity.io?-a-beginner-friendly-guide",
      "how-to-install-astro?--a-step-by-step-installation-guide-for-beginners",
      "how-to-install-next.js-?-a-complete-guide-for-beginners",
    ];
  
    const query = `
      *[_type == "blog" && !(slug.current in $excludedSlugs)] | order(publishedAt desc) {
        _id,
        title,
        slug,
        blogThumbnail,
        publishedAt,
        readingTime,
        author,
        authorImage,
        content
      }
    `;
  
    try {
      const blogs: BlogType[] = await client.fetch(query, { excludedSlugs });
      return blogs;
    } catch (error) {
      console.error("Error fetching newly added blogs:", error);
      return [];
    }
  }


  export async function getAllBlogs(): Promise<BlogType[]> {
    const query = `
      *[_type == "blog"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        blogThumbnail,
        publishedAt,
        readingTime,
        author,
        authorImage,
        content
      }
    `;
  
    try {
      const blogs: BlogType[] = await client.fetch(query);
      return blogs;
    } catch (error) {
      console.error("Error fetching all blogs:", error);
      return [];
    }
  }
  
  