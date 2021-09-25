module.exports = {
  presets: [
    ['@babel/preset-env', { loose: true }],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [
    ['@babel/plugin-transform-runtime', { version: require('@babel/runtime/package.json').version }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
  ],
};
