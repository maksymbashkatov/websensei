import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: {
    appIsrStatus: false,
  },
  output: 'export',
  trailingSlash: true
}

export default nextConfig;