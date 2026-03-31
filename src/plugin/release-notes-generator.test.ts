import test from 'ava';
import {commitAnalyser as plugin} from './commit-analyser.js';

test('name is "@semantic-release/commit-analyzer"', (t) => {
  t.is(plugin[0], '@semantic-release/commit-analyzer');
});

test('uses the "conventionalcommits" preset', (t) => {
  t.is(plugin[1].preset, 'conventionalcommits');
});

function releaseRule(type: string, matchKey = false) {
  return plugin[1].releaseRules.find((rule) =>
    matchKey
      ? Object.keys(rule).includes(type)
      : 'type' in rule && rule.type === type,
  );
}

test('releases breaking commits as major version', (t) => {
  t.deepEqual(releaseRule('breaking', true), {
    breaking: true,
    release: 'major',
  });
});

test('releases revert commits as patch version', (t) => {
  t.deepEqual(releaseRule('revert', true), {revert: true, release: 'patch'});
});

const releasesCommitAs = test.macro<[string, string]>({
  exec: (t, type, release) =>
    t.is(releaseRule(type)?.release as string, release),
  title: (_, type, release) =>
    `releases "${type}" commits as ${release} version`,
});

test(releasesCommitAs, 'build', 'patch');
test(releasesCommitAs, 'ci', 'patch');
test(releasesCommitAs, 'docs', 'patch');
test(releasesCommitAs, 'feat', 'minor');
test(releasesCommitAs, 'fix', 'patch');
test(releasesCommitAs, 'perf', 'patch');
test(releasesCommitAs, 'refactor', 'patch');
test(releasesCommitAs, 'revert', 'patch');
test(releasesCommitAs, 'test', 'patch');

test('does not release "chore" commits', (t) => {
  t.deepEqual(releaseRule('chore'), {type: 'chore', release: false});
});

test('does not release "style" commits', (t) => {
  t.deepEqual(releaseRule('style'), {type: 'style', release: false});
});
