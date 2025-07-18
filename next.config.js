/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    runtime: 'experimental-edge',
  },
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  output: 'export',
  distDir: '.next',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig