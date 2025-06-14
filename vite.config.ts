// vite.config.ts
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'


export default defineConfig({
  plugins: [
    tsconfigPaths(),
    // tailwindcss(), sentry(), ...
    tanstackStart({
        target: "cloudflare_module",
    })
  ],
})