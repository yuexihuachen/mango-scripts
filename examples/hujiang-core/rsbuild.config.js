import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [pluginReact()],
  source: {
    entry: {
      index:'./client/src/index.tsx'
    },
    exclude:  [path.resolve(__dirname, 'server'), /server/],
  },
  output: {
    assetPrefix: './',
  }
});
