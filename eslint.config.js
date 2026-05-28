import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";
import prettier from "eslint-plugin-prettier";

// Blocchi React: se non usi React, rimuovi le import e i riferimenti
// commentati con "[React]" nelle sezioni plugins, rules e settings
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  js.configs.recommended,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        // Browser
        window: "readonly",
        document: "readonly",
        console: "readonly",
        localStorage: "readonly",
        sessionStorage: "readonly",
        fetch: "readonly",
        // Node.js
        process: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
        global: "readonly",
        Buffer: "readonly",
        // Timer
        setTimeout: "readonly",
        setInterval: "readonly",
        clearTimeout: "readonly",
        clearInterval: "readonly",
        // React / JSX
        React: "readonly",
        // DOM
        HTMLDivElement: "readonly",
        HTMLButtonElement: "readonly",
        MouseEvent: "readonly",
        Node: "readonly",
        Response: "readonly",
      },
    },
    plugins: {
      prettier,
      "@typescript-eslint": tseslint,
      // [React] rimuovi da qui in giù se non usi React
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      // [React] rimuovi la riga sotto se non usi React
      ...react.configs.recommended.rules,
      // [React] rimuovi la riga sotto se non usi React
      ...reactHooks.configs.recommended.rules,

      // Prettier
      "prettier/prettier": "warn",

      // TypeScript
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-explicit-any": "warn",

      // [React] rimuovi da qui in giù se non usi React
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react/jsx-no-target-blank": "off",
      "react/no-unescaped-entities": "warn",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],

      // JS base
      "no-unused-vars": "off",
      "no-redeclare": "off",
    },
    // [React] rimuovi l'intero blocco settings se non usi React
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    ignores: ["dist", "eslint.config.js", "test-db.js", ".netlify/**/*"],
  },
];
