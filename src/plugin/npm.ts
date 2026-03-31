import {type PluginSpec} from 'semantic-release';

const npm = [
  '@semantic-release/npm',
  {tarballDir: 'dist'},
] as const satisfies PluginSpec;

export {npm};
