import { defineField, defineType, SchemaTypeDefinition } from "sanity";

export const pathLinks = defineType({
    name: 'pathLinks',
    title: 'Link',
    type: 'object',
    fields: [
        defineField({name: 'label', type: 'string', title: 'Label'}), 
        defineField({name: 'path', type: 'string', title: 'Path'}),
    ]
})as SchemaTypeDefinition
