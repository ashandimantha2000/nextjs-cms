import type { NextConfig } from "next";

if (process.env.NODE_ENV === "development") {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
}

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    dangerouslyAllowLocalIP: process.env.NODE_ENV === "development",
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "2368",
        pathname: "/content/images/**",
      },
      {
        protocol: "https",
        hostname: "localhost",
        pathname: "/content/images/**",
      },
      {
        protocol: "https",
        hostname: "static.ghost.org",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.gravatar.com",
        pathname: "/avatar/**",
      },
      {
        protocol: "https",
        hostname: "localhost",
        pathname: "/**",
      }
    ],
  },
};

export default nextConfig;
