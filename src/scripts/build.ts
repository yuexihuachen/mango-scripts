import path from 'path';
import { utils } from '../utils';

const { hasFile, spawnSync, resolveBin } = utils;

const args = process.argv.slice(2);
const here = (p: string) => path.join(__dirname, p);

const config = args.includes('--config')
  ? []
  : hasFile('rsbuild.config.js')
  ? []
  : ['--config', here('../config/rsbuild.config.js')];

  

const result = spawnSync(resolveBin('rsbuild'), ['build',...config, ...args], {
  stdio: 'inherit',
});

process.exit(result.status);
