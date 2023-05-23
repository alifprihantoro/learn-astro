import { setHeadlessWhen, setCommonPlugins, CodeceptJS } from '@codeceptjs/configure'
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS)

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins()

export const config: CodeceptJS.MainConfig = {
  tests: './e2e/*.spec.ts',
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://localhost:3000',
      show: true,
      browser: 'chromium',
      timeout: 90000,
    },
  },
  include: {
    I: './steps_file',
  },
  name: 'muryp',
}
