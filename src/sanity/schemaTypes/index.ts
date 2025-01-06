
import { type SchemaTypeDefinition } from 'sanity'
import blogs from './blog'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blogs],
}