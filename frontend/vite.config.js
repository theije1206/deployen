import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    build: {
        outDir: resolve(__dirname, "../src/main/webapp"),
        emptyOutDir: true
    },
    resolve: {
        alias: [{
            find: "@",
            replacement: resolve(__dirname, "./src")
        }]
    },
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                changeOrigin: true,
                secure: false,
            }
        }
    }
});
