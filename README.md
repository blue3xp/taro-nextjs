# taro-nextjs

This is a demo project to prove that by modifying the webpack configuration, taro's ui component can run in the nextJS framework

## Steps

1. Need to change next.config.js
2. add taro webpack config
 ``` webpack: (config, options) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        mainFields: ["main:h5", "browser", "module", "jsnext:main", "main"],
        alias: {
          ...config.resolve.alias,
          "@tarojs/taro": "@tarojs/taro-h5",
          '@tarojs/components/dist-h5/react',
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
  }
  ```
3. add babelrc file
```
{
  "presets": ["next/babel"],
  "plugins": ["babel-plugin-transform-taroapi"]
}
```
4. add package.json
   ```
   "dependencies": {
    "@tarojs/components": "3.6.6",
    "@tarojs/taro-h5": "3.6.6"
  },
  "devDependencies": {
    "babel-plugin-transform-taroapi": "^3.6.6"
  }
   ```

  

