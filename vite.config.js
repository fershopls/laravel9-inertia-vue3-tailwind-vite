import { defineConfig } from "vite";

import laravel from 'laravel-vite-plugin'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [
        vue(),
        laravel({
            input: [
                // 'resources/css/main.css',
                'resources/js/main.js'
            ],
            refresh: false,
        }),
    ],
});
