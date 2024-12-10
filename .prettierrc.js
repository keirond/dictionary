module.exports = {
  trailingComma: "es5",
  useTabs: false,
  tabWidth: 4,
  endOfLine: "lf",
  printWidth: 100,
  overrides: [
    {
      files: ["*.json", "*.yml", "*.yaml", "*rc.js"],
      options: {
        tabWidth: 2,
      },
    },
  ],
  singleQuote: true,
};
