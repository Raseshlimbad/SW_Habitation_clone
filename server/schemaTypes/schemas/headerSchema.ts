export const headerSchema = {
  name: 'header',
  type: 'document',
  title: 'Header',
  fields: [
    {
      name: 'logo',
      type: 'image',
      title: 'Logo',
      description: 'Upload the website logo',
      options: {hotspot: true},
    },
    {
      name: 'navigation',
      type: 'array',
      title: 'Navigation Links',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'label', type: 'string', title: 'Label'}, // Blogs, Categories, Resources, Stories
            {name: 'path', type: 'string', title: 'Path'},
          ],
        },
      ],
    },
    {
      name: 'ctaButton',
      type: 'array',
      title: 'CTA Button',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'label', type: 'string', title: 'Label'}, // Contact
            {name: 'path', type: 'string', title: 'Path'},
          ],
        },
      ],
    },
  ],
}
