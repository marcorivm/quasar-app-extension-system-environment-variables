/**
 * Quasar App Extension index/runner script
 * (runs on each dev/build)
 *
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/IndexAPI.js
 */
const fs = require('fs')

const extendWithDotenv = function (api, conf) {
  let envName = '.env.example' // default name
  const encoding = 'utf8'
  const debug = false
  const quasarEnv = {}

  // see if there is anything to do
  if (envName === void 0 || envName === '') {
    return
  }

  // resolve the path to the file
  const envPath = api.resolve.app(envName)

  // check file exists
  if (!fs.existsSync(envPath)) {
    console.log(`App Extension (system-enviroment-variables): '${envName}' file missing; skipping`)
    return
  }

  const { parse } = require('dotenv')
  try {
    // specifying an encoding returns a string instead of a buffer
    const parsed = parse(fs.readFileSync(envPath, { encoding }), { debug })

    // for brevity
    let target = conf.build.env

    Object.keys(parsed).forEach(function (key) {
      if (Object.prototype.hasOwnProperty.call(process.env, key)) {
        target[key] = JSON.stringify(process.env[key])
      } else if (debug) {
        log(`"${key}" is already defined in \`process.env\` and will not be overwritten`)
      }
    })
  } catch (e) {
    console.error(`App Extension (dotenv): Error '${e}'`)
    process.exit(1)
  }
}

module.exports = function (api) {
  // quasar compatibility check
  api.compatibleWith('@quasar/app', '^1.0.0')

  api.extendQuasarConf((conf) => {
    extendWithDotenv(api, conf)
  })
}