// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");

// extra config is needed to enable `react-native-svg-transformer`
module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig(__dirname);
  return {
    transformer: {
      assetPlugins: ["expo-asset/tools/hashAssetFiles"],
    },
    resolver: {
      extraNodeModules: require("expo-crypto-polyfills"),
    },
  };
})();

// module.exports = {
//   resolver: {
//     extraNodeModules: require("expo-crypto-polyfills"),
//   },
// };
