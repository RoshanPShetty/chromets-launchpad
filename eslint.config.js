import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';

export default [
	{
		files: ["**/*.ts"],
		languageOptions: {
			parser: typescriptParser,
		},
		plugins: {
			"@typescript-eslint": typescriptPlugin, // Use the plugin as an object
		},
		rules: {
			"@typescript-eslint/no-unused-vars": "warn",
			"@typescript-eslint/explicit-module-boundary-types": "off",
			eqeqeq: "error",
			semi: ["error", "always"],
			"no-console": "off",
		},
		ignores: ["node_modules", "dist"],
	},
];
