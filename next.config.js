/** @type {import('next').NextConfig} */

// const API_KEY = process.env.API_KEY;
// Beer API document: https://punkapi.com/documentation/v2

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() { // user knows url changes
    return [
      {
        source: "/contact",
        destination: "/form",
        permanent: false,
      }
    ]
  },
  async rewrites() { // redirects but url doesn't change. good way to hide the API_KEY
    return [
      {
        source: "/api/beers",
        destination: `https://api.punkapi.com/v2/beers`
      },
      {
        source: "/api/beers/:id",
        destination: `https://api.punkapi.com/v2/beers/:id`
      }
    ]
  }
}

module.exports = nextConfig
