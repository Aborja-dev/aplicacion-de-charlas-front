// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    server:{
        port: 4320,
    },
    output: "server",
    vite:{
        plugins:[
            tailwindcss()
        ]   
    }
});
