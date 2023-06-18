/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
      {
        protocol: 'https',
        hostname: 'post.healthline.com',
      },
      {
        protocol: 'https',
        hostname: 'www.caringbridge.org',
      },
    ],
  },
};

module.exports = nextConfig;
