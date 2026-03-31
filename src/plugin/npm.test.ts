import test from 'ava';
import {npm as plugin} from './npm.js';

test('name is "@semantic-release/npm"', (t) => {
  t.is(plugin('dist')[0], '@semantic-release/npm');
});

test('sets the "tarballDir" to a string argument', (t) => {
  t.deepEqual(plugin('dist')[1], {tarballDir: 'dist'});
});

test('sets the "tarballDir" to a "false" argument', (t) => {
  t.deepEqual(plugin(false)[1], {tarballDir: false});
});
