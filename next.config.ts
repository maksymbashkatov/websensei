import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: {
    appIsrStatus: false,
  },
  // async headers() {
  //   return [
  //     {
  //       source: '/fonts/:path*.woff2',
  //       headers: [
  //         {
  //           key: 'Content-Type',
  //           value: 'font/woff2',
  //         },
  //       ],
  //     },
  //     {
  //       source: '/fonts/:path*.woff',
  //       headers: [
  //         {
  //           key: 'Content-Type',
  //           value: 'font/woff',
  //         },
  //       ],
  //     },
  //   ];
  // }
}

export default nextConfig;