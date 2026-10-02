import { readFileSync } from "node:fs";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    {
      name: "copy-classic-browser-scripts",
      generateBundle() {
        for (const fileName of ["util.js", "script.js"]) {
          this.emitFile({
            type: "asset",
            fileName,
            source: readFileSync(new URL(fileName, import.meta.url), "utf8"),
          });
        }
      },
    },
  ],
});
