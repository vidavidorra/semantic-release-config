import test from 'ava';
import {changelog as plugin} from './changelog.js';

test('name is "@semantic-release/changelog"', (t) => {
  t.is(plugin, '@semantic-release/changelog');
});
