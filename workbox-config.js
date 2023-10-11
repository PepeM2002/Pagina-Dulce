module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{css,gif,png,html,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};