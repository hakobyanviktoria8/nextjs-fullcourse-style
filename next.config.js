/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
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
