import child_process from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

import externalLink from '@svelte-put/preprocess-external-link';
import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

import pkg from './package.json' with { type: 'json' };

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const commitHash = child_process.execSync('git rev-parse --short HEAD').toString().trim();

const config = {
	preprocess: [
		vitePreprocess(),
		// TODO: update the domain to your own
		externalLink(['www.example.dev', 'example.dev']),
	],
	kit: {
		env: {
			publicPrefix: 'VITE_PUBLIC_',
			privatePrefix: 'VITE_PRIVATE_',
		},
		prerender: {
			// TODO: update the origin to your own
			origin: 'https://www.example.dev',
			crawl: true,
		},
		adapter: adapter({
			routes: {
				include: ['/*'],
				exclude: ['<all>'],
			},
		}),
		version: {
			name: `${pkg.version} (#${commitHash}@${Date.now()})`,
			// pollInterval: 10_000, // every 10 seconds
		},
		alias: {
			$routes: path.resolve(__dirname, 'src/routes'),
		},
	},
	vitePlugin: {
		inspector: {
			toggleKeyCombo: 'alt-shift',
			holdMode: true,
			showToggleButton: 'always',
			toggleButtonPos: 'bottom-left',
		},
	},
};

export default config;
