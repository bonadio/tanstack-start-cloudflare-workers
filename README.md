# tanstack-start-cloudflare-workers

This is a template to work with tanstack start with cloudflare workers

- It uses Drizzle-orm and D1 as database
- It loads cloudflare variables and bindings using a middleware
- deferred route shows how to load data using defered and Await
- index route loads data on the server SSR


1. Clone this repo
2. npm install
3. npm run dev 
4. Go to http://localhost:3000/ (this page should error, but it will create .wrangler/state/v3/d1 sqlite database, open it and create the customer table and add data). Stop and start again "npm run dev" now your data should show.
5. Go to http://localhost:3000/deferred show loading than data
6. To deploy to cloudflare, edit wrangler.toml and adjust D1 database_id than "npm run deploy" 

