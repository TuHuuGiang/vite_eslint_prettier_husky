module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  extends: ["standard-with-typescript", "plugin:react/recommended", "plugin:@typescript-eslint/recommended", "plugin:react-hooks/recommended", "plugin:prettier/recommended", "prettier"],
  overrides: [],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    project: "./tsconfig.json"
  },
  plugins: ["react", "react-refresh", "react-hooks", "prettier"],
  rules: {
    "no-unused-vars": "off",
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    "react/react-in-jsx-scope": "off",
    "react/no-unescaped-entities": "error",
    "react/no-unknown-property": "error",
    "react/display-name": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react-hooks/rules-of-hooks": "error",
    "@typescript-eslint/consistent-type-assertions": [
      "off",
      {
        assertionStyle: "as" | "angle-bracket",
        objectLiteralTypeAssertions: "allow" | "allow-as-parameter"
      }
    ],
    "@typescript-eslint/restrict-template-expressions": [
      "error",
      {
        allowNumber: true,
        allowBoolean: true
      }
    ],
    "@typescript-eslint/semi": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/space-before-function-paren": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-redundant-type-constituents": "error",
    "@typescript-eslint/naming-convention": "off",
    "@typescript-eslint/no-floating-promises": "error",
    "@typescript-eslint/unified-signatures": "error"
  },
  settings: {
    react: { version: "detect" }
  }
};
