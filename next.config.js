const path = require('path')

const nextTranslate = require('next-translate')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [
      path.join(__dirname, 'styles/abstracts'),
      path.join(__dirname, 'styles/base')
    ]
  }
}

module.exports = nextTranslate(nextConfig)
