import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [sveltekit()],
  preview: {
    allowedHosts: ["*"],
  },
  server: {
    allowedHosts: 'all'
  }
});
