module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    "plugin:@typescript-eslint/recommended"
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  rules: {
    "no-fallthrough": ["off"],
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "no-empty": ["error", { "allowEmptyCatch": true }],
    "brace-style": ["error", "stroustrup"],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "single"],
    "jsx-quotes": ["error", "prefer-double"],
    "semi": ["error", "always"],
    "object-curly-spacing": ["error", "always"],
    "no-extra-semi": ["off"],
    "no-multiple-empty-lines": ["error", {
      "max": 1,
      "maxEOF": 0
    }],
  },
}
