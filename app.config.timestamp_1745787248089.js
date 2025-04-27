// app.config.ts
import { cloudflare } from "unenv";
import { defineConfig } from "@tanstack/react-start/config";
import tsConfigPaths from "vite-tsconfig-paths";
var app_config_default = defineConfig({
  vite: {
    plugins: [
      tsConfigPaths({
        projects: ["./tsconfig.json"]
      })
    ]
  },
  server: {
    preset: "cloudflare-module",
    unenv: cloudflare
  }
});
export {
  app_config_default as default
};
