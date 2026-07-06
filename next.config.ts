import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "2368",
        pathname: "/content/images/**",
      },
      {
        protocol: "https",
        hostname: "static.ghost.org",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
