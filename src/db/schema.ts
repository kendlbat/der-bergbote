import { pgTable, varchar, text, integer, serial } from "drizzle-orm/pg-core";

export const articlesTable = pgTable("articles", {
    origin: varchar({
        length: 255,
    }).primaryKey(),
    content: text(),
});

export const rarities = pgTable("rarities", {
    id: serial("id").primaryKey(),
    color: varchar({ length: 12 }),
});

export const items = pgTable("items", {
    id: serial("id").primaryKey(),
    sprite: varchar({
        length: 255,
    }),
    rarity: integer("rarity_id").references(() => rarities.id),
});

export const inventory = pgTable("inventory", {
    item: integer("item_id").references(() => items.id),
    count: integer(),
    user: varchar({ length: 255 }).primaryKey(),
});
