import {type Options} from 'semantic-release';
import * as plugin from './plugin/index.js';

const config = {
  branches: ['main', {name: 'beta', prerelease: true}],
  plugins: [
    plugin.commitAnalyser,
    plugin.releaseNotesGenerator,
    plugin.changelog,
    plugin.formatChangelog,
    plugin.npm(),
    plugin.git,
    plugin.github(),
  ],
} as const satisfies Options;

export default config;
