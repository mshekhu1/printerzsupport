/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Generate static HTML files for traditional hosting
  // Disable pages directory to use only app directory
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.printerzsupport.com',
      },
      {
        protocol: 'https',
        hostname: 'th.bing.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    unoptimized: false, // Set to true only if you need to disable optimization
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  // Performance optimizations
  swcMinify: true,
  // Headers removed for static export - configure on server instead
};

module.exports = nextConfig;

