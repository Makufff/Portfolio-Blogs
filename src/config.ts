// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Makufff.Logs</>";
export const SITE_DESCRIPTION = "Welcome to Makufff.Logs</> :3";
// export const TWITTER_HANDLE = "@makufff.js";
export const MY_NAME = "Tanapat Chamted";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
