import { defineField, defineType, SchemaTypeDefinition } from "sanity";

export const header = defineType({
  name: "header",
  type: "document",
  title: "Header",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
    }),
    defineField({
      name: "logo",
      type: "image",
      title: "Logo",
      description: "Upload the website logo",
      options: { hotspot: true },
    }),
    defineField({
      name: "navItems",
      type: "array",
      title: "Nav Items",
      of: [{ type: "navItem" }],
    }),
    defineField({
      name: "ctaButton",
      type: "array",
      title: "CTA Button",
      of: [{ type: "buttonWithPath" }],
    }),
  ],
}) as SchemaTypeDefinition;
