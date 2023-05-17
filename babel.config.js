module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['@babel/plugin-transform-modules-commonjs', { loose: true }],
    'babel-plugin-styled-components',
  ],
};
