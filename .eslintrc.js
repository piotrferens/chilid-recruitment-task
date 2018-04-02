module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    parser: "babel-eslint",
    extends: "eslint:recommended",
    parserOptions: {
        ecmaVersion: 2017,
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true,
        },
        sourceType: "module",
    },
    plugins: ["react"],
    rules: {
        "linebreak-style": ["error", "unix"],
        quotes: ["error", "double"],
        semi: ["error", "always"],
        "react/jsx-uses-vars": "error",
        "react/jsx-uses-react": "error",
        indent: 0,
        "no-case-declarations": 0,
    },
};
