/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  ...nextConfig,
  images: {
    domains: ["github.com", "cloudflare-ipfs.com"],
  },
};
