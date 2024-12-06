module.exports = {
    printWidth: 120,
    useTabs: false,
    tabWidth: 4,
    overrides: [
        {
            files: ["*.json", "*.yml", "*.yaml", "*.js"],
            options: {
                tabWidth: 2,
            },
        },
    ],
};
