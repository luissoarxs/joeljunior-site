/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Add remote domains here in the future if property photos are hosted externally
    // remotePatterns: [{ protocol: 'https', hostname: 'example.com' }],
  },
};

module.exports = nextConfig;
