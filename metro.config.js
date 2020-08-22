module.exports = {
	transformer: {
		assetPlugins: [ 'expo-asset/tools/hashAssetFiles' ]
	}
};

/**
 * Metro configuration for React Native (tsx)
 * https://github.com/facebook/react-native
 *
 * @format
 */

module.exports = {
	transformer: {
		getTransformOptions: async () => ({
			transform: {
				experimentalImportSupport: false,
				inlineRequires: false
			}
		})
	},
	resolver: {
		sourceExts: [ 'jsx', 'js', 'ts' ]
	}
};
