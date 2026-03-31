import {type PluginSpec} from 'semantic-release';

const releaseNotesGenerator = [
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
] as const satisfies PluginSpec;

export {releaseNotesGenerator};
