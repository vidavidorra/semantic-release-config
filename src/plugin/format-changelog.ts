import {type PluginSpec} from 'semantic-release';

const formatChangelog = [
  '@semantic-release/exec',
  {prepareCmd: 'prettier --write CHANGELOG.md'},
] as const satisfies PluginSpec;

export {formatChangelog};
