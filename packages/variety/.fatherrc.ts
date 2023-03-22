import { defineConfig } from "father";

export default defineConfig({
  // targets: { ie: 11 },
  esm: {
    output: "es",
  },
  umd: {
    name: "variety",
    output: "lib",
  },
});
