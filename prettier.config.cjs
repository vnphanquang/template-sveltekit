module.exports = {
  ...require('@vnphanquang/prettierrc'),
  plugins: [require('prettier-plugin-svelte'), require('prettier-plugin-tailwindcss')],
  tailwindConfig: './tailwind.config.cjs',
  overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }],
};
