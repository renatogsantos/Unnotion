/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  webpack: (config) => {
    // Configuração do node-loader
    config.module.rules.push({
      test: /\.node$/,
      use: 'node-loader',
    });

    return config;
  },
}