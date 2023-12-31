module.exports = {
    env: {
        node: true,
        es2021: true
    },
    extends: ['universe/native'],
    plugins: ['etc'],
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
    rules: {
        'no-unused-vars': 'error',
        'etc/no-commented-out-code': 'error'
    }
};
