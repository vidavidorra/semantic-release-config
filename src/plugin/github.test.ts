import test from 'ava';
import {github as plugin} from './github.js';

test('name is "@semantic-release/github"', (t) => {
  t.is(plugin[0], '@semantic-release/github');
});

test('sets the "assets" to "dist/*.tgz"', (t) => {
  t.deepEqual(plugin[1], {assets: 'dist/*.tgz'});
});
