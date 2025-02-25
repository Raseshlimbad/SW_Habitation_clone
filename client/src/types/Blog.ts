import { PortableTextBlock } from "sanity";

export interface BlogType {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  blogThumbnail: ImageAsset;
  publishedAt: string; // ISO date string (YYYY-MM-DD)
  readingTime: string;
  author: string;
  authorImage: ImageAsset;
  content: PortableTextBlock[];
}

export interface ImageAsset {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
}
