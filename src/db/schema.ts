import { pgTable, varchar, text } from "drizzle-orm/pg-core";

export const articlesTable = pgTable("articles", {
    origin: varchar({
        length: 255,
    }).primaryKey(),
    content: text(),
});
