import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteSingleFile } from "vite-plugin-singlefile";
import obfuscator from "vite-plugin-javascript-obfuscator";

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      react(),
      viteSingleFile(),
      mode === "production" &&
        obfuscator({
          rotateStringArray: true,
        }),
    ].filter(Boolean),

    base: "/",
    server: {
      port: 3000,
    },
    build: {
      outDir: "build",
      sourcemap: false,
      target: "esnext",
      assetsInlineLimit: 100000000,
      cssCodeSplit: false,
      rollupOptions: {
        output: {
          inlineDynamicImports: true,
        },
      },
    },
  };
});
