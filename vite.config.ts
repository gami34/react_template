import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { getThemeVariables } from "antd/dist/theme";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          ...getThemeVariables(),
          // setup companies theme colors
          "primary-color": "#1DA57A",
          "heading-color": "#f00"
        },
        javascriptEnabled: true
      }
    }
  }
});
