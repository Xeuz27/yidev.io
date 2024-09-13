// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

/*add site  */

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()]
});