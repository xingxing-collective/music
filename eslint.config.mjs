import unjs from 'eslint-config-unjs';

export default unjs({
  ignores: ['**/.output', '**/.nitro', '**/.netlify', '**/.nuxt', '**/*.gen.*'],
  rules: {
    'unicorn/no-null': 0,
    'no-undef': 0,
    '@typescript-eslint/no-unused-vars': 0,
    'unicorn/filename-case': 0,
    'unicorn/consistent-function-scoping': 0,
    'unicorn/no-object-as-default-parameter': 0,
    'unicorn/no-nested-ternary': 0,
  },
});
