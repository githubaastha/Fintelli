/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",  
      },
    ],
  },

  experimental: { 
    serverActions: {
      bodySizeLimit: "5mb",
    },
    optimizePackageImports: ["@arcjet/next"],
  }
};

export default nextConfig;