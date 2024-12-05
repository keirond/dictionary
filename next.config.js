module.exports = {
    reactStrictMode: true, // Enables React's strict mode for development (helps with finding potential problems)
    swcMinify: true, // Use SWC for minification (faster than Terser)
    typescript: {
        ignoreBuildErrors: false, // Disallows builds with TypeScript errors
    },
    eslint: {
        ignoreDuringBuilds: true, // Ignores ESLint errors during production builds
    },
    // If you are using a custom server or want to use a different static folder for Hugo
    // You can add custom routing or server-side functionality here.
    async redirects() {
        return [
            {
                source: '/old-page',
                destination: '/new-page',
                permanent: true,
            },
        ];
    },
    // Additional configurations for environment variables, custom routing, etc.
};
