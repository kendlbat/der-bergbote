import {
    pgTable,
    varchar,
    text,
    integer,
    serial,
    date,
    uuid,
    unique,
} from "drizzle-orm/pg-core";

export const topicsTable = pgTable("topics", {
    id: serial("id").primaryKey(),
    name: varchar({ length: 255 }),
});

export const articlesTable = pgTable(
    "articles",
    {
        topic: integer("topic_id").references(() => topicsTable.id),
        source: text(),
        title: varchar({ length: 512 }),
        articleLink: varchar({ length: 1024 }),
        createdAt: date(),
        id: uuid().defaultRandom().primaryKey(),
    },
    (t) => [
        {
            unq: unique().on(t.articleLink, t.createdAt, t.source, t.title),
        },
    ]
);

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
