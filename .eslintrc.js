module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'prettier/prettier': 0,
    'react-hooks/exhaustive-deps': 'off',
    'react/no-did-update-set-state': 'off',
    'no-return-assign': 'off',
    'no-shadow': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    semi: 'off',
  },
};
