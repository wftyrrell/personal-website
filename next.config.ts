const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/personal-website/' : '',
  basePath: isProd ? '/personal-website' : '',
  output: 'export'
};

export default nextConfig;