import test from 'ava';
import {npm as plugin} from './npm.js';

test('name is "@semantic-release/npm"', (t) => {
  t.is(plugin[0], '@semantic-release/npm');
});

test('sets the "tarballDir" to "dist"', (t) => {
  t.deepEqual(plugin[1], {tarballDir: 'dist'});
});
