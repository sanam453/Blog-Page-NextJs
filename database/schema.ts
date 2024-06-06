import { pgTable, serial, text, integer, pgEnum } from "drizzle-orm/pg-core";

export const categoryEnum = pgEnum("category", [
  "food",
  "fashion",
  "trending",
  "travel",
  "lifestyle",
  "music",
  "sports",
  "news",
  "movies",
  "diy",
  "architecture"
])

export const products = pgTable('product', {
  id: serial('id').primaryKey(),
  slug: text('slug').unique(),
  name: text('name').unique(),
  desc: text('desc'),
  view: integer('view'),
  like: integer('like'),
  image: text('image'),
  category: categoryEnum("category"),
});