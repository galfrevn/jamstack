/** @type {import('next').NextConfig} */
const { withContentlayer } = require('next-contentlayer');

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'res.cloudinary.com',
      'www.joshwcomeau.com',
      'avatars.githubusercontent.com',
      'images.ctfassets.net',
      'media.licdn.com',
    ],
  },
};

module.exports = withContentlayer(nextConfig);
