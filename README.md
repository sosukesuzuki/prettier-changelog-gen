# prettier-changelog-gen

Generates changelog for https://github.com/prettier/prettier repo.

## Usage

```sh
$ prettier-changelog-gen --category=javascript --prNumber=3333 --username=sosukesuzuki
```

## Options

### `category`(Optional)

A category of your change. default `"javascript"`. See https://github.com/prettier/prettier/tree/master/changelog_unreleased.

### `prNumber`

A Pull Request number.

### `username`

Your GitHub user name.

### `prettierDir`(Optional)

Your Prettier direcotyr path. default `process.cwd()`.
