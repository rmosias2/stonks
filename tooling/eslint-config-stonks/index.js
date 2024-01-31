module.exports = {
  extends: [
    "turbo",
    "prettier",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: [
    "import",
    "typescript-sort-keys",
    "unused-imports",
    "sort-destructure-keys",
    "sort-keys-plus",
  ],
  rules: {
    camelcase: "error",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
        ignoreRestSiblings: true,
        varsIgnorePattern: "^_",
      },
    ],
    "import/no-cycle": ["warn"],
    "import/order": [
      "warn",
      {
        alphabetize: {
          caseInsensitive: false,
          order: "asc",
        },
        groups: [
          "builtin",
          "external",
          "type",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        "newlines-between": "never",
        pathGroups: [
          {
            group: "external",
            pattern: "react",
            position: "before",
          },
          {
            group: "internal",
            pattern: "@stonks/**",
            position: "before",
          },
          {
            group: "internal",
            pattern: "flagship/**",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
        warnOnUnassignedImports: true,
      },
    ],
    "no-empty-pattern": "off",
    "no-multiple-empty-lines": ["error", { max: 1, maxBOF: 0, maxEOF: 1 }],
    "no-unused-vars": "off",
    "react/jsx-newline": ["warn", { prevent: true }],
    "react/jsx-sort-props": [
      "warn",
      {
        callbacksLast: false,
        ignoreCase: false,
        locale: "auto",
        multiline: "ignore",
        noSortAlphabetically: false,
        reservedFirst: false,
        shorthandFirst: false,
        shorthandLast: false,
      },
    ],
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react/self-closing-comp": "error",
    "sort-destructure-keys/sort-destructure-keys": [
      "warn",
      { caseSensitive: true },
    ],
    "sort-imports": [
      "warn",
      {
        // let import/order deal with declarations
        ignoreDeclarationSort: true,
      },
    ],
    "sort-keys-plus/sort-keys": [
      "warn",
      "asc",
      {
        allowLineSeparatedGroups: true,
        natural: true,
      },
    ],
    "typescript-sort-keys/interface": [
      "warn",
      "asc",
      {
        caseSensitive: true,
        natural: true,
        requiredFirst: false,
      },
    ],
    "typescript-sort-keys/string-enum": [
      "warn",
      "asc",
      {
        caseSensitive: true,
        natural: true,
      },
    ],
    "unused-imports/no-unused-imports": "warn",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
