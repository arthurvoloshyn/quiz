module.exports = {
  root: true,
  extends: "@react-native-community",
  rules: {
    quotes: 0,
    "react/react-in-jsx-scope": 0,
    "@typescript-eslint/no-unused-vars": [
      2,
      { argsIgnorePattern: "^_", ignoreRestSiblings: true },
    ],
  },
};
