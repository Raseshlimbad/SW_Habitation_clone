export const footerSchema = {
  name: 'footer',
  type: 'document',
  title: 'Footer',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'socialLinks',
      type: 'array',
      title: 'Social Links',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'label', type: 'string', title: 'Label'}, // Blogs, Categories, Resources, Stories
            {name: 'url', type: 'url', title: 'URL'},
          ],
        },
      ],
    },
    {
        name: 'emailInputPlaceholder',
        type: 'string',
        title: 'Email Input Placeholder'
    },
    {
        name: 'submitButtonText',
        type: 'string',
        title: 'Submit button text'
    },
    {
      name: 'footerLinksName',
      type: 'array',
      title: 'Footer Links',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              type: 'string',
              title: 'Label',
            },
            {
              name: 'footerLinkPath',
              type: 'string',
              title: 'Footer Lik Path',
            },
          ],
        },
      ],
    },
  ],
}
