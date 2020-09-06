const { nextI18NextRewrites } = require('next-i18next/rewrites')

const localeSubpaths = {
  id: 'id'
};

module.exports = {
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
}
