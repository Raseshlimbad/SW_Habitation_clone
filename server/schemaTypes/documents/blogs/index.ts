import { defineType } from "sanity";

export const blogs = defineType({
  name: "blog",
  title: "Blog",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200,
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
      validation: (Rule) => Rule.required(),
    },
    {
        name: "blogThumbnail",
        title: "Thubmnail Image",
        type: "image",
        options: { hotspot: true }, 
        fields: [
          {
            name: "alt",
            type: "string",
            title: "Alt text",
            description: "Alternative text for the image",
          },
        ],
      },
    {
      name: "publishedAt",
      title: "Published At",
      type: "date",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "readingTime",
      title: "Reading Time",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "author",
      title: "Author",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
        name: "authorImage",
        title: "Author Image",
        type: "image",
        options: { hotspot: true }, // Allows cropping and focusing
        fields: [
          {
            name: "alt",
            type: "string",
            title: "Alt text",
            description: "Alternative text for the image",
          },
        ],
      },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        { type: "block" }, // Include text content (block)
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alt text",
              description: "Alternative text for the image",
            },
          ],
        },
      ],
    },
  ],
});
