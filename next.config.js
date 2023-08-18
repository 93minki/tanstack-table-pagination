/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/userList",
        destination: "http://localhost:3030/userList",
      },
    ];
  },
};

module.exports = nextConfig;
