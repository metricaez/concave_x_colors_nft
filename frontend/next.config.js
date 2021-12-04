const isProd = (process.env.NODE_ENV || 'production') === 'production'

module.exports = {
  reactStrictMode: true,
  basePath: isProd ? '/concave_x_colors_nft' : '',
  assetPrefix: isProd ? '/concave_x_colors_nft/' : ''
}
