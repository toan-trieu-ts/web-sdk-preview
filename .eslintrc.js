module.exports = {
  env: { browser: true, es2020: true },
  extends: ["eslint:recommended"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  rules: {
    "no-console": "warn",
  },
  globals: {
    TVWebSDK: "readonly",
  },
};
