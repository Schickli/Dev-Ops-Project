import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [sveltekit()],
  preview: {
    allowedHosts: ["*"],
  },
  server: {
    host: "0.0.0.0",
    port: 3000,
    preview: {
      allowedHosts: [
        "my-agenda-app.jollycoast-976c0690.switzerlandnorth.azurecontainerapps.io"
        ]
      }
    }
});
