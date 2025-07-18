/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  output: 'export',
  distDir: '.next',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig