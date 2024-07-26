/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/epk", destination: "/electronic-press-kit", permanent: true },
    ];
  },
};

export default nextConfig;
