const plugin = require('tailwindcss/plugin');

function templatePlugin() {
  return plugin(
    function () {
      // adding components, utilities, variants
    },
    {
      // extending theme;
    },
  );
}

/** @type {import("tailwindcss").Config } */
const config = {
  darkMode: '',
  content: ['./src/**/*.{html,js,svelte,ts,md}', 'svelte.config.js'],
  plugins: [templatePlugin()],
};

module.exports = config;
