/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import solid from "vite-plugin-solid";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    transformMode: {
      web: [/.[jt]sx?/],
    },
    threads: false,
    isolate: false,
  },
  plugins: [solid()],
  resolve: {
    conditions: ["development", "browser"],
  },
});
