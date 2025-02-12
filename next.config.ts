import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: {
    appIsrStatus: false,
  },
  // output: 'export',
  // trailingSlash: true
  trailingSlash: false
}

export default nextConfig;