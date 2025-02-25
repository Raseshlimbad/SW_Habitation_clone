import { defineField, defineType, SchemaTypeDefinition } from "sanity";

export const socialLinks = defineType({
    name: 'socialLinks',
    title: 'Social Links',
    type: 'object',
    fields: [
        defineField({name: 'label', type: 'string', title: 'Label'}), 
        defineField({name: 'url', type: 'url', title: 'URL'}),
    ]
})as SchemaTypeDefinition
