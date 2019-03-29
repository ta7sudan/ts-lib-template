module.exports = {
	env: {
		es6: true,
		browser: true,
		node: true
	},
	// 不要用eslint-config-prettier, 那是个傻逼东西, 只用eslint-plugin-prettier就好
	// 'extends': ['eslint:recommended', 'plugin:prettier/recommended'],
	extends: 'plugin:@typescript-eslint/recommended',
	plugins: ['@typescript-eslint'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json',
		extraFileExtensions: ['.ts', '.js']
	},
	rules: {
		'no-console': 'off',
		'no-debugger': 'off',
		'no-extra-boolean-cast': 'off',
		'@typescript-eslint/array-type': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-object-literal-type-assertion': 'off',
		'@typescript-eslint/no-use-before-define': 'off',
		'@typescript-eslint/indent': [
			'error',
			'tab',
			{
				SwitchCase: 1,
				VariableDeclarator: 1
			}
		],
		indent: [
			'error',
			'tab',
			{
				SwitchCase: 1,
				VariableDeclarator: 1
			}
		],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single', {
			avoidEscape: true
		}],
		semi: ['error', 'always'],
		'semi-spacing': [
			'error',
			{
				before: false,
				after: true
			}
		],
		'no-unused-vars': [
			'error',
			{
				vars: 'local',
				args: 'none'
			}
		],
		camelcase: [
			'error',
			{
				properties: 'always',
				ignoreDestructuring: true
			}
		],
		'brace-style': [
			'warn',
			'1tbs',
			{
				allowSingleLine: true
			}
		],
		'comma-dangle': ['warn', 'never'],
		'comma-style': ['warn', 'last'],
		'comma-spacing': [
			'error',
			{
				before: false,
				after: true
			}
		],
		radix: 'warn',
		strict: ['error', 'global'],
		'space-before-function-paren': [
			'error',
			{
				anonymous: 'always',
				named: 'never',
				asyncArrow: 'always'
			}
		],
		'arrow-parens': ['error', 'as-needed']
	}
};
