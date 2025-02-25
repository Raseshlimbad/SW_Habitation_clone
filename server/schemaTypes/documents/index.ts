import { blogs } from "./blogs";
import { blogContent } from "./blogs/block";
import { footer } from "./footer";
import { socialLinks } from "./footer/socialLinks";
import { header } from "./header";
import { navItem } from "./header/navItem";
import { heroSection } from "./heroSection";

export const documentTypes = [
    header, navItem, footer, socialLinks, heroSection, blogs, blogContent
]

export default documentTypes;