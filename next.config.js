/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};

module.exports = {
  ...nextConfig,
  images: {
    domains: ["github.com", "cloudflare-ipfs.com"],
  },
};
