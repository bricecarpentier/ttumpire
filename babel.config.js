module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
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
          '@tt:components': './src/components',
          '@tt:features': './src/features',
          '@tt:rules': './src/rules',
          '@tt:types': './src/types',
          '@tt:store': './src/store',
          '@tt:utils': './src/utils',
        },
      },
    ],
  ],
};
