import { drizzle, DrizzleD1Database } from "drizzle-orm/d1";

import * as customerSchema from "@/db/customerSchema"


export const dbSchema = {
    ...customerSchema, 
}

export type Db = DrizzleD1Database<typeof dbSchema>


export const initDb = (env: Env) => {
    return drizzle(env.DB, { schema: dbSchema  }) as Db;
};






