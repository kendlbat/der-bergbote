import { pgTable, varchar, text, integer, serial } from "drizzle-orm/pg-core";
import { userInfo } from "os";

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
    sprite: varchar({
        length: 255,
    }),
    rarity: integer("rarity_id").references(() => rarities.id),
});

export const inventory = pgTable("inventory", {});
