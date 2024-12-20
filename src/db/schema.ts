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
        article: text(),
        alignment: integer(),
        createdAt: timestamp(),
        id: uuid().defaultRandom().primaryKey(),
        questions: json().$type<{ question: string; isTrue: boolean }[]>(),
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

export const inventory = pgTable(
    "inventory",
    {
        item: varchar({ length: 255 }),
        user: varchar({ length: 255 }),
        id: uuid().defaultRandom().primaryKey(),
    },
    (t) => [
        {
            uq: unique("uq_inventory_user_item").on(t.item, t.user),
        },
    ]
);
export const equipped = pgTable(
    "equipped",
    {
        item: varchar({ length: 255 }),
        slot: varchar({ length: 20 }),
        user: varchar({ length: 255 }),
    },
    (t) => [
        {
            pk: primaryKey({ columns: [t.slot, t.user] }),
        },
    ]
);

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

export const voucherRedemptions = pgTable("voucherRedemptions", {
    user: varchar({ length: 255 }),
    voucher: varchar({ length: 32 }),
    redeemedAt: timestamp(),
});

export type Topic = typeof topicsTable.$inferSelect;
export type Article = typeof articlesTable.$inferSelect;
