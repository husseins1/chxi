/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["media.graphassets.com"],
  },
  env:{
    GRAPHCMS_END_POINT:process.env.GRAPHCMS_END_POINT
  }
};

module.exports = nextConfig
