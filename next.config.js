/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
  redirects:async()=>{
    return[
      {
        source:"/about",
        destination:"/",
        permanent:false,
      }
    ]
  }
}
