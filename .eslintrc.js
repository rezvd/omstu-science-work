module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'prettier', '@typescript-eslint', 'react-hooks'],
  extends: [
    'prettier',
    'react-app',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'prettier/prettier': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-use-before-define': 'off',
    'max-params': ['warn', 4],
    'no-lonely-if': 'warn',
    'no-negated-condition': 'warn',
    'no-unneeded-ternary': 'warn',
    'one-var': ['warn', 'never'],
    'arrow-body-style': ['warn', 'as-needed'],
    'no-duplicate-imports': 'warn',
    'no-var': 'warn',
    'object-shorthand': ['warn', 'always'],
    'prefer-const': ['warn', { destructuring: 'any', ignoreReadBeforeAssign: false }],
    'prefer-spread': 'warn',
    'prefer-template': 'warn',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['warn'],
    'no-empty-function': ['warn', { allow: ['arrowFunctions'] }],
    'prefer-destructuring': ['warn', { object: true, array: true }, { enforceForRenamedProperties: false }],
    'no-unused-vars': 'off',
    'curly': ['warn', 'all'],
    'default-case': ['warn'],
    'default-case-last': 'warn',
    'max-depth': ['warn', 4],
    'max-nested-callbacks': ['warn', 4],
    'dot-location': ['warn', 'property'],
    'eqeqeq': ['warn', 'smart'],
    'no-empty-pattern': 'warn',
    'no-useless-concat': 'warn',
    'no-undefined': 'error',
    'no-undef-init': 'error',
    'no-nested-ternary': 'warn',
    'spaced-comment': ['warn', 'always'],
    '@typescript-eslint/no-use-before-define': ['warn', { functions: true, classes: true }],
    '@typescript-eslint/no-explicit-any': ['warn', { fixToUnknown: false }],
    '@typescript-eslint/no-empty-interface': ['warn', { allowSingleExtends: false }],
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-unused-vars': ['warn'],
    '@typescript-eslint/explicit-module-boundary-types': ['off'],
    'react/self-closing-comp': ['warn', { component: true, html: true }],
    'react/destructuring-assignment': ['warn', 'always'],
    'react/jsx-boolean-value': ['warn', 'never'],
    'react/jsx-curly-brace-presence': ['warn', { 'props': 'never', 'children': 'never' }],
    'react/jsx-fragments': ['warn', 'syntax'],
    'react/jsx-key': ['warn', { checkFragmentShorthand: true }],
    'react/no-array-index-key': 'warn',
    'import/no-anonymous-default-export': 'off',
  },
};