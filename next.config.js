module.exports = {
    reactStrictMode: true,
    distDir: 'build',
    // basePath: '/blog',
    i18n: {
      locales: ["en"],
      defaultLocale: "en",
    },
    eslint: {
      dirs: ['src/pages', 'src/components', 'src/store', 'src/helpers', 'src/models'],
    },
  };
  