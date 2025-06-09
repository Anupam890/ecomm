import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      config: {
        content: [
          "./index.html",
          "./src/**/*.{js,ts,jsx,tsx}",
          "./src/components/**/*.{js,ts,jsx,tsx}",
          "./src/pages/**/*.{js,ts,jsx,tsx}",
        ],
        theme: {
          extend: {
            colors: {
              primary: "#111827",
              secondary: "#f59e0b",
            },
          },
        },
        plugins: [],
      },
    }),
  ],
});
