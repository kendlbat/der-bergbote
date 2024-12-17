import { drizzle } from "drizzle-orm/node-postgres";
import { DATABASE_URL } from "./connection";

export const db = drizzle(DATABASE_URL);
