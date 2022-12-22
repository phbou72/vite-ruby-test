import { defineConfig } from "vite";
import RailsPlugin from "vite-plugin-rails";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [RailsPlugin(), react(), tsconfigPaths()],
  base: "/",
  css: {
    modules: {
      scopeBehaviour: "local",
      globalModulePaths: [new RegExp("app/ui")],
      localsConvention: "camelCaseOnly",
    },
  },
});
