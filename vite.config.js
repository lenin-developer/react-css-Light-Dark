import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import postcssPresetEnv from "postcss-preset-env";

// https://vitejs.dev/config/
export default ({ mode }) => {
  return defineConfig({
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    css: {
      postcss: {
        plugins: [
          postcssPresetEnv({
            stage: false,
            features: {
              "nesting-rules": true,
              "custom-media-queries": true,
              /**
               * "blank-pseudo-class": false,
               * "focus-visible-pseudo-class": false,
               * "focus-within-pseudo-class": false,
               * "has-pseudo-class": false,
               * "prefers-color-scheme-query": false
               */
            },
          }),
        ],
      },
    },
    define: { "process.env": { ...loadEnv(mode, process.cwd()) } },
  });
};
