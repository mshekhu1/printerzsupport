/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Generate static HTML files for traditional hosting
  outputFileTracingRoot: __dirname, // Set workspace root to silence lockfile warning
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
    unoptimized: true, // Required for static export
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  // Optimize production builds
  productionBrowserSourceMaps: false,
  // Increase timeout for build process to prevent socket hangup errors
  staticPageGenerationTimeout: 600,
  // Headers removed for static export - configure on server instead
};

module.exports = nextConfig;

