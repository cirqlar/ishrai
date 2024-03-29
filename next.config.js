module.exports = {
  webpack: function(config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })
    return config
  },
  trailingSlash: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en'
  }
}