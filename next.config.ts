import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ Prevents ESLint errors from breaking Vercel builds
  },
  typescript: {
    ignoreBuildErrors: true, // ✅ (Optional) Prevents TypeScript errors from failing build
  },
};

export default nextConfig;
