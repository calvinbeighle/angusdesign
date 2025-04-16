// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: {
    buildActivity: false,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/pay',
        permanent: true, // Set to true for a permanent redirect (301), false for temporary (302)
      },
    ];
  },
};

module.exports = nextConfig;
