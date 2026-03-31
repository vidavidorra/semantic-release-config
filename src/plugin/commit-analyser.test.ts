import test from 'ava';
import {releaseNotesGenerator as plugin} from './release-notes-generator.js';

test('name is "@semantic-release/commit-analyzer"', (t) => {
  t.is(plugin[0], '@semantic-release/release-notes-generator');
});

test('uses the "conventionalcommits" preset', (t) => {
  t.is(plugin[1].preset, 'conventionalcommits');
});

function releaseNotes(name: string) {
  return plugin[1].presetConfig.types.find((rule) => rule.type === name);
}

const includesReleaseNotes = test.macro<[string]>({
  exec(t, type) {
    t.is(releaseNotes(type)?.type as string, type);
    t.deepEqual(Object.keys(releaseNotes(type) ?? {}), ['type', 'section']);
  },
  title: (_, type) => `release notes include "${type}" commits`,
});

test(includesReleaseNotes, 'build');
test(includesReleaseNotes, 'ci');
test(includesReleaseNotes, 'docs');
test(includesReleaseNotes, 'feat');
test(includesReleaseNotes, 'fix');
test(includesReleaseNotes, 'perf');
test(includesReleaseNotes, 'refactor');
test(includesReleaseNotes, 'revert');
test(includesReleaseNotes, 'style');
test(includesReleaseNotes, 'test');

test('release notes do not include "chore" commits', (t) => {
  t.deepEqual(releaseNotes('chore'), {
    type: 'chore',
    section: 'Miscellaneous Chores',
    hidden: true,
  });
});
