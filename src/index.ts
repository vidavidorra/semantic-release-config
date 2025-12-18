import {type Options} from 'semantic-release';

type Config = Required<Pick<Options, 'branches' | 'plugins'>> &
  Omit<Options, 'branches' | 'plugins'>;

const config = {
  branches: ['main', {name: 'beta', prerelease: true}],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
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
      {
        preset: 'conventionalcommits',
        rules: [
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
    ],
    '@semantic-release/changelog',
    ['@semantic-release/exec', {prepareCmd: 'prettier --write CHANGELOG.md'}],
    ['@semantic-release/npm', {tarballDir: 'dist'}],
    '@semantic-release/git',
    ['@semantic-release/github', {assets: 'dist/*.tgz'}],
  ],
} as const satisfies Config;

export default config;
