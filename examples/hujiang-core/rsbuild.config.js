import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [pluginReact()],
  dev: {
    hmr: true,
  },
  source: {
    entry: {
      index:'./client/src/index.tsx'
    },
    exclude:  [path.resolve(__dirname, 'server'), /server/],
  },
  output: {
    assetPrefix: './',
    manifest: true,
    filenameHash: false,
    sourceMap: {
      js: 'source-map',
      css: true
    }
  }
});
