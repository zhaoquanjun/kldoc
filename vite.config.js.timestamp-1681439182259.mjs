// vite.config.js
import { defineConfig } from "file:///Users/mac/Desktop/self/Vue-profile/node_modules/vite/dist/node/index.js";
import path from "path";
import vue from "file:///Users/mac/Desktop/self/Vue-profile/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import prismjs from "file:///Users/mac/Desktop/self/Vue-profile/node_modules/vite-plugin-prismjs/dist/index.js";
var __vite_injected_original_dirname = "/Users/mac/Desktop/self/Vue-profile";
var prism = () => {
  return {
    name: "prismjs",
    config: () => {
      return {
        languages: ["json"]
      };
    }
  };
};
var vite_config_default = defineConfig({
  plugins: [vue(), prism()],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "src")
    },
    extensions: [".mjs", ".js", ".mts", ".ts", ".jsx", ".tsx", ".json"]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvbWFjL0Rlc2t0b3Avc2VsZi9WdWUtcHJvZmlsZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL21hYy9EZXNrdG9wL3NlbGYvVnVlLXByb2ZpbGUvdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL21hYy9EZXNrdG9wL3NlbGYvVnVlLXByb2ZpbGUvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IHByaXNtanMgZnJvbSAndml0ZS1wbHVnaW4tcHJpc21qcydcblxuY29uc3QgcHJpc20gPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ3ByaXNtanMnLFxuICAgIGNvbmZpZzogKCkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbGFuZ3VhZ2VzOiBbJ2pzb24nXSxcbiAgICAgIH1cbiAgICB9LFxuICB9XG59XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbdnVlKCksIHByaXNtKCldLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYycpLFxuICAgIH0sXG4gICAgZXh0ZW5zaW9uczogWycubWpzJywgJy5qcycsICcubXRzJywgJy50cycsICcuanN4JywgJy50c3gnLCAnLmpzb24nXSxcbiAgfSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTJSLFNBQVMsb0JBQW9CO0FBQ3hULE9BQU8sVUFBVTtBQUNqQixPQUFPLFNBQVM7QUFDaEIsT0FBTyxhQUFhO0FBSHBCLElBQU0sbUNBQW1DO0FBS3pDLElBQU0sUUFBUSxNQUFNO0FBQ2xCLFNBQU87QUFBQSxJQUNMLE1BQU07QUFBQSxJQUNOLFFBQVEsTUFBTTtBQUNaLGFBQU87QUFBQSxRQUNMLFdBQVcsQ0FBQyxNQUFNO0FBQUEsTUFDcEI7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGO0FBR0EsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7QUFBQSxFQUN4QixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxLQUFLO0FBQUEsSUFDcEM7QUFBQSxJQUNBLFlBQVksQ0FBQyxRQUFRLE9BQU8sUUFBUSxPQUFPLFFBQVEsUUFBUSxPQUFPO0FBQUEsRUFDcEU7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
