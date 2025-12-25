import {type Options} from 'semantic-release';

type Config = Required<Pick<Options, 'branches' | 'plugins'>> &
  Omit<Options, 'branches' | 'plugins'>;

const config = {
  branches: ['main', {name: 'beta', prerelease: true}],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      /**
       * Options specified in the release-notes-generator [Configuration](
       * https://github.com/semantic-release/commit-analyzer/blob/v13.0.1/README.md#configuration)
       * documentation.
       */
      {
        preset: 'conventionalcommits',
        releaseRules: [
          {breaking: true, release: 'major'},
          {type: 'build', release: 'patch'},
          {type: 'chore', release: false},
          {type: 'ci', release: 'patch'},
          {type: 'docs', release: 'patch'},
          {type: 'feat', release: 'minor'},
          {type: 'fix', release: 'patch'},
          {type: 'perf', release: 'patch'},
          {type: 'refactor', release: 'patch'},
          {type: 'revert', release: 'patch'},
          {revert: true, release: 'patch'},
          {type: 'style', release: false},
          {type: 'test', release: 'patch'},
        ],
      },
    ],
    [
      '@semantic-release/release-notes-generator',
      /**
       * Options specified in the release-notes-generator [Configuration](
       * https://github.com/semantic-release/release-notes-generator/blob/v14.1.0/README.md#configuration)
       * documentation.
       */
      {
        preset: 'conventionalcommits',
        /**
         * Options specified in the [Conventional Changelog Configuration Spec](
         * https://github.com/conventional-changelog/conventional-changelog-config-spec/tree/v2.1.0/versions/2.1.0/README.md).
         */
        presetConfig: {
          types: [
            {type: 'build', section: 'Build System'},
            {type: 'chore', section: 'Miscellaneous Chores', hidden: true},
            {type: 'ci', section: 'Continuous Integration'},
            {type: 'docs', section: 'Documentation'},
            {type: 'feat', section: 'Features'},
            {type: 'fix', section: 'Bug Fixes'},
            {type: 'perf', section: 'Performance Improvements'},
            {type: 'refactor', section: 'Code Refactoring'},
            {type: 'revert', section: 'Reverts'},
            {type: 'style', section: 'Styles'},
            {type: 'test', section: 'Tests'},
          ],
        },
      },
    ],
    '@semantic-release/changelog',
    ['@semantic-release/exec', {prepareCmd: 'prettier --write CHANGELOG.md'}],
    ['@semantic-release/npm', {tarballDir: 'dist'}],
    '@semantic-release/git',
    ['@semantic-release/github', {assets: 'dist/*.tgz'}],
  ],
} as const satisfies Config;

export default config;
