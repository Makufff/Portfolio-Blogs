import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import mdx from "@astrojs/mdx";
import remarkToc from "remark-toc";
import { rehypeHeadingIds } from '@astrojs/markdown-remark';
const SERVER_PORT = 3000;
let BASE_URL = `http://localhost:${SERVER_PORT}`;

export default defineConfig({
  experimental: {
		viewTransitions: true
	},
  addPageExtension: ".mdx",
  markdown: {
    remarkPlugins: [],
    rehypePlugins: [
      rehypeHeadingIds,
    ],
  },
  server: {
    port: SERVER_PORT,
  },
  site: BASE_URL,
  integrations: [
    sitemap(),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    mdx({
      remarkPlugins: [[remarkToc, { heading: "contents"}] ],
      remarkRehype: {
        footnoteLabel: "Footnotes",
      },
      gfm: false,
    }),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
});
