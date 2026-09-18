/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // A stray lockfile in the home directory makes Next guess the wrong workspace root.
  outputFileTracingRoot: import.meta.dirname,
};

export default nextConfig;
