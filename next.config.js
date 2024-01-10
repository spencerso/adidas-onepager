/** @type {import('next').NextConfig} */
const path = require('path')
const APP_DIR = path.resolve(__dirname, './src')
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/],
      type: 'javascript/auto',
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'static/images/[name].[hash:8].[ext]',
            publicPath: '/',
          },
        },
      ],
    })
    config.resolve.alias = Object.assign(config.resolve.alias, {
      '~': path.resolve(APP_DIR),
      server: path.resolve(APP_DIR, '../server'),
      '~components': path.resolve(APP_DIR, './components'),
      '~hooks': path.resolve(APP_DIR, './hooks'),
      '~styles': path.resolve(APP_DIR, './styles'),
      '~scss': path.resolve(APP_DIR, './styles/common'),
      '~image': path.resolve(APP_DIR, './static/images'),
      '~scripts': path.resolve(APP_DIR, './scripts'),
    })
    return config
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  poweredByHeader: false
}

module.exports = nextConfig
