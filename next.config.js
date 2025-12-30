/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Generate static HTML files for traditional hosting
  outputFileTracingRoot: __dirname, // Set workspace root to silence lockfile warning
  // Disable pages directory to use only app directory
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  
  // Image optimization
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
  
  // Compression and performance
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  
  // Build optimizations
  productionBrowserSourceMaps: false,
  staticPageGenerationTimeout: 600,
  
  // Webpack optimizations for better code splitting
  webpack: (config, { isServer, dev }) => {
    // Only optimize for production builds
    if (!isServer && !dev) {
      config.optimization = {
        ...config.optimization,
        moduleIds: 'deterministic', // Better caching with deterministic module IDs
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            default: false,
            vendors: false,
            // Separate vendor chunk for better caching
            vendor: {
              name: 'vendor',
              chunks: 'all',
              test: /[\\/]node_modules[\\/]/,
              priority: 20,
              reuseExistingChunk: true,
            },
            // Common chunk for shared application code
            common: {
              name: 'common',
              minChunks: 2,
              chunks: 'all',
              priority: 10,
              reuseExistingChunk: true,
              enforce: true,
            },
          },
        },
      };
    }
    
    return config;
  },
  
  // Headers removed for static export - configure on server instead
};

module.exports = nextConfig;

