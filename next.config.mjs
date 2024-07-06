/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "github.com",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "avatar.iran.liara.run",
        port: "",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
