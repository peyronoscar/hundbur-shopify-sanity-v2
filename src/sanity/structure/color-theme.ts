import { ListItemBuilder } from 'sanity/structure'
import { defineStructure } from '@/sanity/utils/defineStructure'

export const colorTheme = defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Color themes')
    .schemaType('colorTheme')
    .child(S.documentTypeList('colorTheme'))
)
