module.exports = {
  reactStrictMode: true,
  // distDir: 'build',
  // basePath: '/blog',
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  // experimental: {
  //   images: {
  //     unoptimized: true,
  //   },
  // },
  eslint: {
    dirs: ['src/pages', 'src/components', 'src/store', 'src/helpers', 'src/models'],
  },
  // exportPathMap: async function (
  //   defaultPathMap,
  //   { dev, dir, outDir, distDir, buildId }
  // ) {
  //   return {
  //     '/': { page: '/' },
  //     '/editor': { page: '/editor' },
  //     '/choose': { page: '/choose' }
  //   }
  // },
};
