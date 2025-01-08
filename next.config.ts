import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    APP_NAME: process.env.APP_NAME,
  },
  output: 'standalone',
}

export default nextConfig
