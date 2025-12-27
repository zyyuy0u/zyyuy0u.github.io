// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    // GitHub Pages 
    site: 'https://zyyuy0u.github.io',

    // 專案名稱
    base: '/',

    // 部落格功能!!!
    integrations: [mdx(), sitemap()],
});