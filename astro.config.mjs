import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import mdx from "@astrojs/mdx";
import remarkToc from "remark-toc";
import vercel from "@astrojs/vercel/static";
import astroRemark from "@astrojs/markdown-remark";
import { rehypeHeadingIds } from '@astrojs/markdown-remark';
const SERVER_PORT = 3000;
// the url to access your blog during local development
const LOCALHOST_URL = `http://localhost:${SERVER_PORT}`;
// the url to access your blog after deploying it somewhere (Eg. Netlify)
const LIVE_URL = "0.0.0.0";
// this is the astro command your npm script runs
const SCRIPT = process.env.npm_lifecycle_script || "";
const isBuild = SCRIPT.includes("astro build");
let BASE_URL = LOCALHOST_URL;
// When you're building your site in local or in CI, you could just set your URL manually
if (isBuild) {
  BASE_URL = LIVE_URL;
}

// https://astro.build/config

// https://astro.build/config
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
      // Adds dataLayer.push as a forwarding-event.
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],

  // adapter: vercel({
  //   analytics: true
  // })
});
