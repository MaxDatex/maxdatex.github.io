import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";


// https://astro.build/config
// export default defineConfig({
//   site: "https://positivustheme.vercel.app",
//   integrations: [tailwind()],
//   output: 'server',
//   adapter: vercel(),
// });

export default defineConfig({
  site: 'https://maxdatex.github.io',
  base: '/blog',
  integrations: [tailwind()],
  output: 'static',
});