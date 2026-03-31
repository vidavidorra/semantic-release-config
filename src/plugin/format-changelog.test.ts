import test from 'ava';
import {formatChangelog as plugin} from './format-changelog.js';

test('name is "@semantic-release/exec"', (t) => {
  t.is(plugin[0], '@semantic-release/exec');
});

test('"prepareCmd" formats the changelog with prettier', (t) => {
  t.deepEqual(plugin[1], {prepareCmd: 'prettier --write CHANGELOG.md'});
});
