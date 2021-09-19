module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
    },
    plugins: ['@typescript-eslint'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ],
    'rules': {
        '@typescript-eslint/no-confusing-void-expression': 'error',
        "@typescript-eslint/restrict-plus-operands": "off",
        // TODO: remove these ones below
        "@typescript-eslint/no-unsafe-assignment": "warn",
    },
};
