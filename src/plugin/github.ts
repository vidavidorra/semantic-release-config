import {type PluginSpec} from 'semantic-release';

const name = '@semantic-release/github';

function github(assets?: string | string[]) {
  return (
    assets === undefined ? name : ([name, {assets}] as const)
  ) satisfies PluginSpec;
}

export {github};
