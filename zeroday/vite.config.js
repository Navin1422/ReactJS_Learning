import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Disable Rolldown & force Vite to use esbuild
export default defineConfig({
  plugins: [react()],
  build: {
    target: "esnext",
  },
  optimizeDeps: {
    esbuildOptions: {},
  },
});
