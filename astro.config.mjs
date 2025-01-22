// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
    site: 'https://obsoleto.vercel.app/',
    base: '/linktree/',
    integrations: [tailwind()],
    output: 'server',
    adapter: vercel(),
    vite: {
        build: {
            assetsPrefix: '/linktree/',
        },
    },
});
