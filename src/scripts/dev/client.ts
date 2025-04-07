import path from 'path';
import { utils } from '../../utils';

const {
    hasFile,
    fromRoot,
    spawnSync,
    resolveBin
} = utils;

const args = process.argv.slice(2)

const here = (p: string) => path.join(__dirname, p);

const webpackConfig = hasFile('rsbuild.config.js')
  ? fromRoot('rsbuild.config.js') 
  : here('../../config/rsbuild.config.js')

const result = spawnSync(
  resolveBin('rsbuild'),
  ['build','-w', '--config', webpackConfig, ...args],
  {
    stdio: 'inherit',
    env: Object.assign({ BUILD_WEBPACK: true }, process.env),
  },
)

process.exit(result.status)