import test from 'ava';
import {github as plugin} from './github.js';

test('name is "@semantic-release/github"', (t) => {
  t.is(plugin(), '@semantic-release/github');
  t.is(plugin('dist')[0], '@semantic-release/github');
});

test('sets the "assets" to a string glob argument', (t) => {
  t.deepEqual(plugin('dist/*.tgz')[1], {assets: 'dist/*.tgz'});
});

test('sets the "assets" to a string array argument', (t) => {
  t.deepEqual(plugin(['dist/*.tgz', 'a'])[1], {assets: ['dist/*.tgz', 'a']});
});
