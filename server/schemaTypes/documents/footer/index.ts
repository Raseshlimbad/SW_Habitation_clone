import {defineField, defineType, SchemaTypeDefinition} from 'sanity'

export const footer = defineType({
  name: 'footer',
  type: 'document',
  title: 'Footer',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'footerText',
      type: 'string',
      title: 'footerText',
    }),
    defineField({
      name: 'socialLinks',
      type: 'array',
      title: 'Social Links',
      of: [{type: 'socialLinks'}],
    }),
    defineField({
      name: 'emailInputPlaceholder',
      type: 'string',
      title: 'Email Input Placeholder',
    }),
    defineField({
      name: 'submitButtonText',
      type: 'string',
      title: 'Submit button text',
    }),
    defineField({
      name: 'footerLinksName',
      type: 'array',
      title: 'Footer Links',
      of: [{type: 'pathLinks'}],
    }),
  ],
}) as SchemaTypeDefinition
