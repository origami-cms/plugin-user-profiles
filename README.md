# Origami: Gravatar Plugin
[![npm](https://img.shields.io/npm/v/origami-plugin-user-profiles.svg)](http://npmjs.com/package/origami-plugin-user-profiles)
[![Travis](https://img.shields.io/travis/origami-cms/plugin-user-profiles.svg)](https://travis-ci.org/origami-cms/plugin-user-profiles)
[![Codecov](https://img.shields.io/codecov/c/github/origami-cms/plugin-user-profiles.svg)](https://codecov.io/gh/origami-cms/plugin-user-profiles)

This plugin provides functionality for user profiles. By default, it will use Gravatar, otherwise will default to:

![user](content/default-profile.svg)

## Installation
```bash
yarn add origami-plugin-user-profiles
```

## Usage
In your `.origami` file, add it to the plugins:
`.origami`
```json
{
    ...
    "plugins": {
        "user-profile": true
    }
    ...
}
```

## Moving forward / TODO
- [ ] Add configuration for using a custom image


## Issues
If you find a bug, please file an issue on the issue tracker on GitHub.


## Contributions
All pull requests and contributions are most welcome. Let's make the internet better!
