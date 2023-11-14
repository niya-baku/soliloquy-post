module.exports = {
  "*.{js,jsx,ts,tsx}": ["biome format . --write", "biome check ."],
  "**/*.ts?(x)": () => "npm run check-types",
};
