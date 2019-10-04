# System Environment Variables (quasar-app-extension-system-environment-variables)

[![npm version](https://badge.fury.io/js/quasar-app-extension-system-environment-variables.svg)](https://badge.fury.io/js/quasar-app-extension-system-environment-variables)

====
> Load environment variables from the system and makes them available through process.env. Works best for building on CI/CD environments

In some scenarios like when working in a CI enviroment where we might want to load enviroment variables from the system variables instead of an .env file. This plugin will handle loading system variables as long as they are present in the .env.example file.

## Install

```bash
quasar ext add system-environment-variables
```

Quasar CLI will retrieve it from NPM and install the extension.

## Uninstall

```bash
quasar ext remove system-environment-variables
```

## Info

You need to setup a `.env.example` file which can work as a dictionary so the plugin knows which variables to look for and load from the system enviroment, plus it works as a guide for other users letting them know which variables are available.

## Donate

If you appreciate the work that went into this App Extension, please consider [donating to Quasar](https://donate.quasar.dev) or [buy me a beer](https://www.buymeacoffee.com/marcorivm).
