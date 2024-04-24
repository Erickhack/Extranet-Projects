// eslint-disable-next-line import/no-extraneous-dependencies
import withSvgr from '@newhighsco/next-plugin-svgr';

/** @type {import('next').NextConfig} */
const nextConfig = withSvgr({
  reactStrictMode: true,
  swcMinify: true,
});

export default nextConfig;
