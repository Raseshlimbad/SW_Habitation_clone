import { defineField, defineType, SchemaTypeDefinition } from "sanity";

export const buttonWithPath = defineType({
    name: 'buttonWithPath',
    title: 'Buttons',
    type: 'object',
    fields: [
        defineField({name: 'label', type: 'string', title: 'Label'}), 
        defineField({name: 'path', type: 'string', title: 'Path'}),
    ]
})as SchemaTypeDefinition
