import { defineField, defineType, SchemaTypeDefinition } from "sanity";

export const heroSection = defineType({
  name: "heroSection",
  type: "document",
  title: "Hero Section",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
    }),
    defineField({
      name: "heroTitle",
      type: "string",
      title: "Hero Title",
    }),
    defineField({
      name: "heroSmallTitle",
      type: "string",
      title: "Hero Small Title",
    }),
    defineField({
      name: "visitorsCount",
      type: "number",
      title: "Visitors Count",
    }),
    defineField({
      name: "visitorsCountSideText",
      type: "string",
      title: "Visitors Count Side Text",
    }),
    defineField({
      name: "leftPanel",
      type: "image",
      title: "Left Panel",
    }),
    defineField({
      name: "rigthPanel",
      type: "image",
      title: "Right Panel",
    }),
    
  ],
}) as SchemaTypeDefinition;
