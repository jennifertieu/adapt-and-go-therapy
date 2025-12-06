/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  
  // Disable image optimization for static export
  // Images will be served as-is from the public folder
  images: {
    unoptimized: true,
  },
  
  // Note: headers() function is not supported with static export
  // Security headers are configured in netlify.toml instead
};

export default nextConfig;
