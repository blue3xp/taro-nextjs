/** @type {import('next').NextConfig} */
const webpack = require("webpack");
const nextConfig = {
  webpack: (config, options) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        mainFields: ["main:h5", "browser", "module", "jsnext:main", "main"],
        alias: {
          ...config.resolve.alias,
          "@tarojs/taro": "@tarojs/taro-h5",
          ["@tarojs/components$"]: "@tarojs/components/lib/react",
        },
      },
      plugins: [
        ...config.plugins,
        new webpack.DefinePlugin({
          "process.env.TARO_ENV": JSON.stringify("h5"),
          ENABLE_INNER_HTML: JSON.stringify(false),
          ENABLE_ADJACENT_HTML: JSON.stringify(false),
          ENABLE_SIZE_APIS: JSON.stringify(false),
          ENABLE_TEMPLATE_CONTENT: JSON.stringify(false),
          ENABLE_CLONE_NODE: JSON.stringify(false),
          ENABLE_CONTAINS: JSON.stringify(false),
          ENABLE_MUTATION_OBSERVER: JSON.stringify(false),
          DEPRECATED_ADAPTER_COMPONENT: JSON.stringify(false),
        }),
      ],
    };
  },
};

module.exports = nextConfig;
