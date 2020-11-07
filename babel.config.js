module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@tt:components': './components/*',
          '@tt:features': './features/*',
          '@tt:rules': './rules',
          '@tt:types': './types/*',
          '@tt:store': './store',
          '@tt:utils': './utils/*',
        },
      },
    ],
  ],
};
