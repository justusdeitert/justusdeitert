// @ts-check
import { defineConfig } from 'astro/config';
import UnoCSS from '@unocss/astro';

export default defineConfig({
  site: 'https://justusdeitert.de',
  integrations: [UnoCSS({ injectReset: true })],
});
