module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ['universe/native'],
    overrides: [
        {
            env: {
                node: false
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
        'no-unused-vars': 'error'
    }
};
