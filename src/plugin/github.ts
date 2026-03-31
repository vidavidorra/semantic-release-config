import {type PluginSpec} from 'semantic-release';

const github = [
  '@semantic-release/github',
  {assets: 'dist/*.tgz'},
] as const satisfies PluginSpec;

export {github};
