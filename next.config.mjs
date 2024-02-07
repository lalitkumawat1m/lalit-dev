/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    externalDir: true,
    images: {allowFutureImage: true},
  },
};

export default nextConfig;
