import test from 'ava';
import config from './index.js';

/**
 * Semantic-release accepts almost any configuration. This makes validating
 * the configuration, especially of the plugins, very difficult. The
 * configuration is also used in the CI/CD workflow, acting as an end-to-end
 * test of the configuration.
 */

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

test('"plugins" includes the commit analyser', (t) => {
  const [name, options] = config.plugins[0];
  t.is(name, '@semantic-release/commit-analyzer');
  t.is(options.preset, 'conventionalcommits');
});

function releaseRule(type: string, matchKey = false) {
  return config.plugins[0][1].releaseRules.find((rule) =>
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

test('"plugins" includes the release notes generator', (t) => {
  const [name, options] = config.plugins[1];
  t.is(name, '@semantic-release/release-notes-generator');
  t.is(options.preset, 'conventionalcommits');
});

function releaseNotes(name: string) {
  return config.plugins[1][1].rules.find((rule) => rule.type === name);
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

test('"plugins" includes changelog generation and formatting', (t) => {
  t.is(config.plugins[2], '@semantic-release/changelog');
  const [name, options] = config.plugins[3];
  t.is(name, '@semantic-release/exec');
  t.deepEqual(options, {prepareCmd: 'prettier --write CHANGELOG.md'});
});

test('"plugins" includes npm (packaging)', (t) => {
  const [name, options] = config.plugins[4];
  t.is(name, '@semantic-release/npm');
  t.deepEqual(options, {tarballDir: 'dist'});
});

test('"plugins" includes Git', (t) => {
  t.is(config.plugins[5], '@semantic-release/git');
});

test('"plugins" includes GitHub release', (t) => {
  const [name, options] = config.plugins[6];
  t.is(name, '@semantic-release/github');
  t.deepEqual(options, {assets: 'dist/*.tgz'});
});
