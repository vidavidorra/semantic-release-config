import {type PluginSpec} from 'semantic-release';

const commitAnalyser = [
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
] as const satisfies PluginSpec;

export {commitAnalyser};
