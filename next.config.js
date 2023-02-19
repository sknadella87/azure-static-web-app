/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig
module.exports={
  TrailingSlash:true,
  exportPathMap: function(){
    return{
      '/':{page:'/'}
    };
  }
};