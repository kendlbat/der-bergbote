import {
    pgTable,
    varchar,
    text,
    integer,
    serial,
    date,
    uuid,
    unique,
    timestamp,
    boolean,
    primaryKey,
    real,
    json,
} from "drizzle-orm/pg-core";

export const topicsTable = pgTable("topics", {
    id: uuid().defaultRandom().primaryKey(),
    name: varchar({ length: 255 }),
    topicImage: text(),
});

export const articlesTable = pgTable(
    "articles",
    {
        topic: uuid("topic_id").references(() => topicsTable.id),
        source: text(),
        title: varchar({ length: 512 }),
        articleLink: varchar({ length: 1024 }),
        createdAt: timestamp(),
        id: uuid().defaultRandom().primaryKey(),
    },
    (t) => [
        {
            unq: unique().on(t.articleLink, t.createdAt, t.source, t.title),
        },
    ]
);

export const balance = pgTable("balance", {
    user: varchar({ length: 255 }).primaryKey(),
    name: varchar({ length: 255 }),
    amount: integer().notNull().default(0),
});

export const inventory = pgTable("inventory", {
    item: varchar({ length: 255 }),
    user: varchar({ length: 255 }),
    id: uuid().defaultRandom().primaryKey(),
});

export const userArticles = pgTable(
    "userArticles",
    {
        user: varchar({ length: 255 }),
        article: uuid("article_id").references(() => articlesTable.id),
        rating: real(),
    },
    (a) => [
        {
            pk: primaryKey({ columns: [a.article, a.user] }),
        },
    ]
);

export type Topic = typeof topicsTable.$inferSelect;
export type Article = typeof articlesTable.$inferSelect;
