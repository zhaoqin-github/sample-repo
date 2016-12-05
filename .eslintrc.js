module.exports = {
    "env": {
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 6
    },
    "rules": {
        "no-unused-vars": [
            "off"
        ],
        "no-redeclare": [
            "off"
        ],
        "no-undef": [
            "off"
        ],
        "no-mixed-spaces-and-tabs": [
            "error",
            "smart-tabs"
        ],
        "no-console": [
            "warn"
        ],
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "semi": [
            "error",
            "always"
        ],
        "curly": [
            "error",
            "all"
        ],
        "max-len": [
            "error",
            79
        ],
        "no-empty": [
            "error"
        ],
        "no-multi-spaces": [
            "error"
        ],
        "space-before-blocks": [
            "error"
        ],
        "keyword-spacing": [
            "error"
        ],
        "no-trailing-spaces": [
            "error"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "eol-last": [
            "error"
        ]
    }
};
