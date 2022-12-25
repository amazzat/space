/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: {
          type: "host",
          value: "video.amazat.xyz",
        },
        destination:
          "https://www.loom.com/share/e773bfff865c4c9aa47f9daff4e52e44",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
