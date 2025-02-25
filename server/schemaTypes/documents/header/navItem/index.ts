import {defineField, defineType, SchemaTypeDefinition} from 'sanity'

export const navItem = defineType({
  name: 'navItem',
  type: 'object',
  title: 'Nav Item',
  fields: [
    defineField({name: 'label', type: 'string', title: 'Label'}), // Blogs, Categories, Resources, Stories
    defineField({name: 'path', type: 'string', title: 'Path'}),
  ],
}) as SchemaTypeDefinition

