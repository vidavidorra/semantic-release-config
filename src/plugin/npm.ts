import {type PluginSpec} from 'semantic-release';

function npm(tarballDir: string | false) {
  return ['@semantic-release/npm', {tarballDir}] as const satisfies PluginSpec;
}

export {npm};
