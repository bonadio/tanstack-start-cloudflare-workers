// app.config.ts
import  { cloudflare }  from  "unenv";
import { defineConfig } from '@tanstack/react-start/config'
import tsConfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  vite: {
    plugins: [
      tsConfigPaths({
        projects: ['./tsconfig.json'],
      }),
    ],
    build: {
        // set to false to see vinxi output
        minify: false,
    },
  },
  server:  {
	preset:  "cloudflare-module",
	unenv: cloudflare,
  }   
})