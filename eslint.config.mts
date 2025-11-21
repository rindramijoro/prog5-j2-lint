import js from "@eslint/js";
import globals from "globals";
import * as tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import spellcheck from "eslint-plugin-spellcheck";

export default defineConfig([
    {
        files: ["eslint.config.*"],
        plugins: { js },
        extends: [js.configs.recommended],
        languageOptions: {
            globals: globals.browser,
        },
    },
    ...tseslint.configs.recommended,
    {
        files: ["**/*.ts", "**/*.tsx"],
        plugins: { spellcheck },
        rules: {
            "@typescript-eslint/naming-convention": ["error", { selector: "default", format: ["camelCase"] }, { selector: "variable", format: ["camelCase"] }, { selector: "method", format: ["camelCase"] }, { selector: "class", format: ["PascalCase"] }],
            "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
            "spellcheck/spell-checker": [
                "error",
                {
                    identifiers: true,
                    comments: false,
                    strings: false,
                    lang: "en_US",
                    skipWords: ["tsconfig", "eslint"],
                },
            ],
            "no-undef": "off",
        },
        languageOptions: {
            globals: globals.browser,
        },
    },
]);
