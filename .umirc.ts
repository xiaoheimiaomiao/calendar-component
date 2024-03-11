import { defineConfig } from "umi";

export default defineConfig({
  routes: [{ path: "/", component: "index" }],
  npmClient: "npm",
  outputPath: "docs",
  base: "/calendar-component",
});
