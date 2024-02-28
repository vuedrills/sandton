const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'aulianza.s3.ap-southeast-1.amazonaws.com',
      'aulianza.id',
      'aulianza.com',
      'dev-to-uploads.s3.amazonaws.com',
      'res.cloudinary.com',
      'lh3.googleusercontent.com',
      'blog-api.aulianza.id',
      'images.unsplash.com',
      'unsplash.com',
      'source.unsplash.com',
    ],
  },
};

module.exports = nextConfig;


