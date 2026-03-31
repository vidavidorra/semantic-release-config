import test from 'ava';
import {git as plugin} from './git.js';

test('name is "@semantic-release/git"', (t) => {
  t.is(plugin, '@semantic-release/git');
});
