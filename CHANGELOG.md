## [2.0.1](https://github.com/vidavidorra/semantic-release-config/compare/v2.0.0...v2.0.1) (2026-03-31)

### Bug Fixes

- the `npm` plugin `tarballDir` cannot be set to `false` ([41be6a7](https://github.com/vidavidorra/semantic-release-config/commit/41be6a76693dffe7aabe8dcf997b60bf50cf7e0e))

## [2.0.0](https://github.com/vidavidorra/semantic-release-config/compare/v1.0.4...v2.0.0) (2026-03-31)

### ⚠ BREAKING CHANGES

- The default import no longer publishes the npm package. To keep the current behaviour, extend `@vidavidorra/semantic-release-config/npm`.

### Continuous Integration

- use release config from `./dist/npm.js`, using the `npm` entrypoint ([3ce806a](https://github.com/vidavidorra/semantic-release-config/commit/3ce806a54a4b2e5207b353a0115ff2187b63c5d3))

### Features

- add `npm` export to release npm packages and add GitHub assets ([98a71f3](https://github.com/vidavidorra/semantic-release-config/commit/98a71f3d76173fb6a11f079938c887ac6dc17985))

### Code Refactoring

- move all plugin configs to a plugin directory ([c3b3e2b](https://github.com/vidavidorra/semantic-release-config/commit/c3b3e2b1014111b4fcb5c1f1658b040ce8151fe8))

### Tests

- validate the new plugins are used by reference ([92714a8](https://github.com/vidavidorra/semantic-release-config/commit/92714a8c439a7a5eef09e8a0de62cbd93674d5a7))

## [1.0.4](https://github.com/vidavidorra/semantic-release-config/compare/v1.0.3...v1.0.4) (2025-12-25)

### Bug Fixes

- configure `release-note-generator` options using `presetConfig` ([28b4ea6](https://github.com/vidavidorra/semantic-release-config/commit/28b4ea62e928e0db18bec32d61f73fe494977c7b))

## [1.0.3](https://github.com/vidavidorra/semantic-release-config/compare/v1.0.2...v1.0.3) (2025-12-19)

### Bug Fixes

- remove `override` from a767760 and install `conventional-changelog-conventionalcommits` ([09693a5](https://github.com/vidavidorra/semantic-release-config/commit/09693a53916fc72aebc68b5c8a48a4bdbaff0762))

## [1.0.2](https://github.com/vidavidorra/semantic-release-config/compare/v1.0.1...v1.0.2) (2025-12-18)

### Bug Fixes

- temporary override conventional-changelog-conventionalcommits to `>=v9.0.0` ([#2](https://github.com/vidavidorra/semantic-release-config/issues/2)) ([a767760](https://github.com/vidavidorra/semantic-release-config/commit/a7677601a6b8c99cf57779f95f2ac0b37a9d3d41)), closes [#3](https://github.com/vidavidorra/semantic-release-config/issues/3)

## [1.0.1](https://github.com/vidavidorra/semantic-release-config/compare/v1.0.0...v1.0.1) (2025-12-18)

### Reverts

- Revert "ci: set temporary npm token for the initial deployment" ([cfafa06](https://github.com/vidavidorra/semantic-release-config/commit/cfafa06b6f01b0ff2188f1a21479983bb7c119b7))

## 1.0.0 (2025-12-18)

### Continuous Integration

- set temporary npm token for the initial deployment ([98cf86d](https://github.com/vidavidorra/semantic-release-config/commit/98cf86d0e178779c4efd7727d9034f40915fe157))

### Features

- add semantic-release configuration ([97b9c80](https://github.com/vidavidorra/semantic-release-config/commit/97b9c80f9385a978cd982d5dd32116a55fee2ef6))
