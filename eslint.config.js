import { fileURLToPath } from 'node:url';

import { defineConfig } from '@vnphanquang/eslint-config';

import svelteConfig from './svelte.config.js';

const gitignorePath = fileURLToPath(new URL('./.gitignore', import.meta.url));

export default defineConfig({
	gitignorePath,
	svelte: {
		config: svelteConfig,
	},
});
