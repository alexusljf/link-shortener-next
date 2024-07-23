/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/api/list",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store",
          },
          {
            key: "x-vercel-cache",
            value: "REVALIDATE",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
