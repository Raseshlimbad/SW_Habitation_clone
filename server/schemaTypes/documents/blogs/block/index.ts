import { defineType } from "sanity";

export const blogContent = defineType({
  name: "blogContent",
  title: "Blog Content",
  type: "block", // Change from "object" to "block"
  styles: [
    { title: "Normal", value: "normal" },
    { title: "H1", value: "h1" },
    { title: "H2", value: "h2" },
    { title: "H3", value: "h3" },
    { title: "Quote", value: "blockquote" },
  ],
  lists: [{ title: "Bullet", value: "bullet" }],
  marks: {
    decorators: [
      { title: "Strong", value: "strong" },
      { title: "Emphasis", value: "em" },
      { title: "Underline", value: "underline" },
      { title: "Code", value: "code" },
    ],
    annotations: [
      {
        name: "link",
        type: "object",
        title: "URL",
        fields: [
          {
            name: "href",
            type: "url",
            title: "URL",
          },
        ],
      },
    ],
  },
});
