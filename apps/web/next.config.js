/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  // Optimize for memory usage
  experimental: {
    // Reduce memory usage during build
    memoryBasedWorkersCount: true,
    // Skip type checking during build to save memory
    typedRoutes: false,
  },
  typescript: {
    // Skip type checking during build to save memory
    ignoreBuildErrors: true,
  },
  // Reduce memory usage by minimizing only in production
  swcMinify: process.env.NODE_ENV === "production",
};

module.exports = nextConfig;
