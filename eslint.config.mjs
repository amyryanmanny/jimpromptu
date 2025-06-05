import { FlatCompat } from "@eslint/eslintrc";
import { configs as tsConfigs } from "typescript-eslint";
import prettierRecommended from "eslint-plugin-prettier/recommended";

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  tsConfigs.eslintRecommended,
  prettierRecommended,
  {
    rules: {},
  },
];

export default eslintConfig;
