import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';

export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } }, // Node.jsとブラウザのグローバル変数を両方追加
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      'react/react-in-jsx-scope': 'off', // JSX内でReactをインポートしないことを許可
    },
    settings: {
      react: {
        version: 'detect', // 自動的にインストールされているReactのバージョンを検出します
      },
    },
  },
];
