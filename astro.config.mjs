// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
    site: 'https://yidev.vercel.app/linktree/',
    integrations: [tailwind()],
    output: 'server',
    adapter: vercel(),
    build: {
        assetsPrefix: '/linktree/',
    },
});
