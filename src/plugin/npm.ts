import {type PluginSpec} from 'semantic-release';

const name = '@semantic-release/npm';
function npm(tarballDir?: string) {
  return (
    tarballDir === undefined ? name : ([name, {tarballDir}] as const)
  ) satisfies PluginSpec;
}

export {npm};
