/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/PixelPerfect" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/PixelPerfect" : "",
  images: {
    unoptimized: true,
  },
};
export default nextConfig;
