import globals from "globals";
import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  js.configs.recommended,
  {
    ignores: [
        "./node_modules/**",
        "**/node_modules/**",
        "libs/**",
        "demoassets/**",
        "coverage/**",
        ".github/**",
    ]
  },
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.amd,
        ...globals.browser,
        ...globals.es6,
        ...globals.node,
        ...globals.jest,
        "globalThis": false
      }
    },
    rules: {
      "no-console": "off",
      "no-use-before-define": ["error", { "functions": false }],
      "func-names": ["off"],
      "complexity": ["error", 26],
      "curly": ["error", "all"],
      "dot-location": ["error", "property"],
      "dot-notation": ["error"],
      "eqeqeq": ["error", "always"],
      "guard-for-in": "error",
      "no-alert": "error",
      "no-script-url": "error",
      "no-proto": "error",
      "no-lone-blocks": "error",
      "no-loop-func": "error",
      "no-invalid-this": "error",
      "no-implied-eval": "error",
      "no-implicit-globals": "error",
      "no-shadow": "error",
      "global-require": "error",
      "comma-dangle": ["error", "never"],
      "camelcase": ["error", { "properties": "always" }],
      "no-prototype-builtins": "off"
    }
  },
  eslintConfigPrettier
];
