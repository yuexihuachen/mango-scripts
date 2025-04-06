import { utils } from '../../utils';

const { spawnSync, resolveBin } = utils;

const result = spawnSync(
  resolveBin('bun'),[
    'index.ts'
  ],
  {
    stdio: 'inherit'
  }
);

process.exit(result.status);
