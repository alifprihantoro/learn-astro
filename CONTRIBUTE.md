# Contributor Manual

We welcome contributions of any size and skill level. As an open source project, we believe in giving back to our contributors and are happy to help with guidance on PRs, technical writing, and turning any feature idea into a reality.

## Quick Guide

### Prerequisite

```shell
node: "^14.18.0 || >=16.12.0"
pnpm: "^7.9.5"
# otherwise, your build will fail
```

### Setting up your local repo and Development

```bash
git clone && cd ...
yarn
yarn dev
```

### Running tests
to running test see this repo [web compiled](https://github.com/muryp/web-compiled)

### Commit message
```bash
[opts]: [title]

[body](optional)

[username/link github] - [issue number](optional)
```
- feat: feature
- content: add content
- update: content update
- fix: bug fixing
- style: formatting or fixing linter
- refactor: change code be better (no bug or new feat)
