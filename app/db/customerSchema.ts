import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const customer = sqliteTable('customer', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    name: text('name').notNull() ,
})

export type Customer = typeof customer.$inferSelect | undefined // return type when queried
export type InsertCustomer = typeof customer.$inferInsert // insert type
export type CustomerUpdate = InsertCustomer & { id: number }
export type CustomerDelete = { id: number }