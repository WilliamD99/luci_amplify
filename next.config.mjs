/** @type {import('next').NextConfig} */
const nextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  reactStrictMode: false,
  images: {
    domains: ["picsum.photos"],
  },
};

export default nextConfig;
