module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['standard-with-typescript', 'plugin:react/recommended'],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    rules: {
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/quotes': 0,
      '@typescript-eslint/semi': 0,
      '@typescript-eslint/comma-dangle': 0,
      '@typescript-eslint/space-before-function-paren': 0,
      '@typescript-eslint/indent': 'off',
      '@typescript-eslint/explicit-function-return-type': 0,
      '@typescript-eslint/member-delimiter-style': 0,
      '@typescript-eslint/strict-boolean-expressions': 0,
      '@typescript-eslint/no-throw-literal': 0,
      '@typescript-eslint/prefer-optional-chain': 0,
      'multiline-ternary': 0,
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // Packages `react` related packages come first.
            ['^react', '^@?\\w'],
            // Internal packages.
            ['^(@|components)(/.*|$)'],
            // Side effect imports.
            ['^\\u0000'],
            // Parent imports. Put `..` last.
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            // Other relative imports. Put same-folder imports and `.` last.
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
            // Style imports.
            ['^.+\\.?(css)$']
          ]
        }
      ]
    }
  }
};
