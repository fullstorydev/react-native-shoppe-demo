module.exports = function(api){
  api.cache.never()
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      '@fullstory/react-native', ['@fullstory/annotate-react', { native: true }],
      // "@fullstory/babel-plugin-annotate-react", { native: true },
    ]
  };
}
