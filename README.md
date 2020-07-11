# prettier-changelog-gen

Generates changelog for https://github.com/prettier/prettier repo.

## Usage

```sh
$ prettier-changelog-gen --category=javascript --prNumber=3333 --username=sosukesuzuki
```

## Options

### `category`

A category of your change. See https://github.com/prettier/prettier/tree/master/changelog_unreleased.

### `prNumber`

A Pull Request number.

### `username`

Your GitHub user name.

### `prettierDir`(Optional)

Your Prettier directory path. default `process.cwd()`.
