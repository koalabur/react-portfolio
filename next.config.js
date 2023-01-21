/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles/scss")],
    prependData: `@import "app.scss";`,
  },
  images: {
    loader: "cloudinary",
    path: "https://res.cloudinary.com/dg6sd9yyx/image/upload/v1671834530",
  },
  env: {
    API_NINJA: process.env.API_NINJA_KEY,
  },
};

module.exports = nextConfig;
