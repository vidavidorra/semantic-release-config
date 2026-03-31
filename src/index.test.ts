import test from 'ava';
import {type PluginSpec} from 'semantic-release';
import * as plugin from './plugin/index.js';
import config from './index.js';

test('exports an object as "default"', (t) => {
  t.is(typeof config, 'object');
});

test('"branches" include "main"', (t) => {
  t.true(Array.isArray(config.branches));
  t.is(config.branches.at(0), 'main');
});

test('"branches" include "beta" as prerelease', (t) => {
  t.true(Array.isArray(config.branches));
  t.deepEqual(config.branches.at(1), {name: 'beta', prerelease: true});
});

const usesPlugin = test.macro<[PluginSpec, keyof typeof plugin]>({
  exec(t, configPlugin, name) {
    if (typeof plugin[name] === 'function') {
      t.fail('Unsupported plugin type');
    } else {
      t.is(configPlugin, plugin[name]);
    }
  },
  title: (_, _a, name) => `uses the "${name}" plugin`,
});

test(usesPlugin, config.plugins[0], 'commitAnalyser');
test(usesPlugin, config.plugins[1], 'releaseNotesGenerator');
test(usesPlugin, config.plugins[2], 'changelog');
test(usesPlugin, config.plugins[3], 'formatChangelog');
test(usesPlugin, config.plugins[5], 'git');

test('uses the "npm" plugin without "tarballDir"', (t) => {
  t.deepEqual(config.plugins[4], plugin.npm());
});
test('uses the "github" plugin without "assets"', (t) => {
  t.deepEqual(config.plugins[6], plugin.github());
});
