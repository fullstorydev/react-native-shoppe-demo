module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    '@fullstory/react-native',
    ['@fullstory/annotate-react', { native: true }],
    'react-native-paper/babel',
  ],
};
