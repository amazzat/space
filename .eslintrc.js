const { configure, presets } = require("eslint-kit");

module.exports = configure({
  root: __dirname,
  presets: [
    presets.node(),
    presets.react(),
    presets.nextJs(),
    presets.prettier(),
    presets.imports(),
  ],
  extend: {
    plugins: ["tailwindcss"],
    extends: ["plugin:tailwindcss/recommended"],
  },
});
