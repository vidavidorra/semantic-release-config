# [**semantic-release**][semantic-release] configuration <!-- omit in toc -->

[**semantic-release**][semantic-release] configuration.

- Analyses commits following the [Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/) specification.
- Generates release notes following the [Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/) specification.
- Formats the changelog using [**Prettier**](https://prettier.io/).
- Deploys to [**npm**](https://www.npmjs.com/), from the `dist` directory.
- Creates a release commit, updating the version in the `package.json` and the changelog.
- Creates a [**GitHub**](https://github.com/) release, with the [**npm**](https://www.npmjs.com/) package tarball as an asset.

---

[![npm version](https://img.shields.io/npm/v/@vidavidorra/semantic-release-config?logo=npm&style=flat-square)](https://www.npmjs.com/package/@vidavidorra/semantic-release-config)
[![npm downloads](https://img.shields.io/npm/dm/@vidavidorra/semantic-release-config?logo=npm&style=flat-square)](https://www.npmjs.com/package/@vidavidorra/semantic-release-config)
[![Node.js version support](https://img.shields.io/node/v/@vidavidorra/semantic-release-config?logo=node.js&style=flat-square)](https://nodejs.org/en/about/releases/)
[![Renovate](https://img.shields.io/badge/Renovate-enabled-brightgreen?logo=renovatebot&logoColor=&style=flat-square)](https://renovatebot.com)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079?style=flat-square)](https://github.com/semantic-release/semantic-release)
[![Code coverage](https://img.shields.io/codecov/c/github/vidavidorra/semantic-release-config?logo=codecov&style=flat-square)](https://codecov.io/gh/vidavidorra/semantic-release-config)
[![License](https://img.shields.io/github/license/vidavidorra/semantic-release-config?style=flat-square)](LICENSE.md)

- [Install](#install)
- [Usage](#usage)
- [Contributing](#contributing)
- [Security policy](#security-policy)
- [License](#license)

## Install

```sh
npm install --save-dev @vidavidorra/semantic-release-config semantic-release
```

## Usage

Use this configuration in your project's [**semantic-release**][semantic-release] configuration by specifying it as string value for the `extends` key of the configuration, as documented in the [**semantic-release**][semantic-release] [Configuration](https://semantic-release.gitbook.io/semantic-release/usage/configuration) documentation. In your `package.json` this is the `release` key extending the configuration, as shown in the following example.

```json
{
  "release": {
    "extends": "@vidavidorra/semantic-release-config"
  }
}
```

## Contributing

Please [create an issue](https://github.com/vidavidorra/semantic-release-config/issues/new/choose) if you have a bug report or feature proposal, or [create a discussion](https://github.com/vidavidorra/semantic-release-config/discussions) if you have a question. If you like this project, please consider giving it a star ⭐ to support my work.

Refer to the [contributing guide](https://github.com/vidavidorra/.github/blob/main/CONTRIBUTING.md) for detailed information about other contributions, like pull requests.

[![Conventional Commits: 1.0.0](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow?style=flat-square)](https://conventionalcommits.org)
[![Linter](https://img.shields.io/badge/Linter-ESLint-4B32C3?logo=eslint&style=flat-square&style=flat-square)](https://eslint.org/)
[![XO code style](https://img.shields.io/badge/code_style-5ed9c7?logo=xo&labelColor=gray&style=flat-square)](https://github.com/xojs/xo)
[![Prettier code style](https://img.shields.io/badge/code_style-Prettier-ff69b4?logo=prettier&style=flat-square)](https://github.com/prettier/prettier)

## Security policy

Please refer to the [Security Policy on GitHub](https://github.com/vidavidorra/semantic-release-config/security) for the security policy.

## License

This project is licensed under the [GPLv3 license](https://www.gnu.org/licenses/gpl.html).

Copyright © 2025 Jeroen de Bruijn

<details><summary>License notice</summary>
<p>

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see <http://www.gnu.org/licenses/>.

The full text of the license is available in the [LICENSE](LICENSE.md) file in this repository and [online](https://www.gnu.org/licenses/gpl.html)

</details>

<!-- References -->

[semantic-release]: https://semantic-release.gitbook.io/semantic-release/
