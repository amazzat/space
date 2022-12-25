/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "https://video.amazat.xyz",
        destination:
          "https://www.loom.com/share/e773bfff865c4c9aa47f9daff4e52e44",
      },
    ];
  },
};

module.exports = nextConfig;
