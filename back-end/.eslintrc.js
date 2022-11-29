module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "react-app", "react-app/jest"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
  },
  plugins: ["react"],
  rules: {},
};
