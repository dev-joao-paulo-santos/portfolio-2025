import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ["nlqkzc-5173.csb.app", "nlqkzc-5174.csb.app"], // Adicione este host permitido
    host: true, // Permite acessar de qualquer IP
    strictPort: true, // Garante que o Vite não mude de porta automaticamente
  },
});
