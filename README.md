# tanstack-start-cloudflare-workers

This is a template to work with tanstack start with cloudflare workers

- It uses Drizzle-orm and D1 as database
- It loads cloudflare variables and bindings using a middleware
- deferred route shows how to load data using deferred and Await
- index route loads data on the server SSR


1. Clone this repo
2. npm install
3. Create D1 database `npx wrangler d1 create test-tanstack-start` this will return database_id update it in wrangler.toml
4. Create Local database schema `npx wrangler d1 execute test-tanstack-start --command "CREATE TABLE IF NOT EXISTS customer (id INTEGER PRIMARY KEY, name TEXT NOT NULL)"`
5. Add data `npx wrangler d1 execute test-tanstack-start --command "INSERT INTO "customer" VALUES (1,'Customer 1'); INSERT INTO "customer" VALUES (2,'Customer 2');"`
6. npm run dev 
7. Go to http://localhost:3000/deferred show loading than data
8. To deploy to cloudflare "npm run deploy" before you deploy run the above D1 commands with --remote to create the remote database  

## This version now workes with Tanstack Start version 1.121