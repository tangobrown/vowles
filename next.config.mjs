/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    // Permanent (308) redirects from old URLs to their new homes, for SEO.
    // Exact-path matches, so `/services/<slug>` service pages are unaffected.
    return [
      { source: "/reviews", destination: "/about", permanent: true },
      { source: "/services", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
