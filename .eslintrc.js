module.exports = {
	root: true,
	env: {
    	es2021: true,
	},
	extends: ['plugin:vue/vue3-essential', 'eslint:recommended'],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
	},
};
