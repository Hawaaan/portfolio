import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
export default defineConfig({
    plugins: [react()],
      server: {
    host: true,          // same as 0.0.0.0
    port: 5175,
    strictPort: true
  }
});
