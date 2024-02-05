module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./"],
        extensions: [".js", ".jsx", ".ts", ".tsx", ".svg"],
        alias: {
          // This needs to be mirrored in tsconfig.json
          "@app": "./app",
        },
      },
    ],
    "nativewind/babel",
  ],
};
