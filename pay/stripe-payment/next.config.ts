import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)', // Apply to all routes
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate', // Forces revalidation of assets
          },
        ],
      },
    ];
  },
};

export default nextConfig;
