/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.selise.club",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "testasmpublic-14e65.kxcdn.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig
