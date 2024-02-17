import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@app": "/src/app",
      "@widgets": "/src/widgets",
      "@pages": "/src/pages",
      "@entities": "/src/entities",
      "@services": "/src/services",
      "@contexts": "/src/app/contexts",
      "@features": "/src/features",
    },
  },
});
