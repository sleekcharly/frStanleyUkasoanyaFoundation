/** @type {import('next').NextConfig} */

import path from 'path';

const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|swf|ogv)$/, // Add more extensions if needed
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/videos',
          outputPath: 'static/videos/',
          name: '[name].[ext]',
        },
      },
    });

    return config;
  },
};

export default nextConfig;
