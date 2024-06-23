import { defineField } from 'sanity'

import { blocksToText } from '@/sanity/utils/blocksToText'

export const gridItem = defineField({
  name: 'gridItem',
  title: 'Grid Item',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'body',
      type: 'portableTextSimple',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      body: 'body',
      image: 'image',
      title: 'title',
    },
    prepare({ body, image, title }) {
      return {
        media: image,
        subtitle: body && blocksToText(body),
        title,
      }
    },
  },
})
