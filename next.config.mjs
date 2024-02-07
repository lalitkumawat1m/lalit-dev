/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    externalDir: true,
    images: {allowFutureImage: true},
    newNextLinkBehavior: false,
  },
};

export default nextConfig;
