// @ts-check
import 'dotenv/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

const siteHostname = process.env.SITE_HOSTNAME ? process.env.SITE_HOSTNAME : "http://localhost:4321";

// https://astro.build/config
export default defineConfig({
	site: siteHostname,
	//site: "http://example.com",
	integrations: [mdx(), sitemap()],
	redirects: {
		"/episodes": "/videos",
		"/organizations/[id]": "/organization/[id]",
		"/org/[id]": "/organization/[id]",
		"/o/[id]": "/organization/[id]",
		"/presenters/[id]": "/presenter/[id]",
		"/s/[id]": "/presenter/[id]",
	},
});
