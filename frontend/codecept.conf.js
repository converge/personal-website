exports.config = {
  tests: './__tests__/e2e/*.js',
  output: './__tests__/e2e/output',
  helpers: {
    Playwright: {
      url: 'http://localhost:8000',
      show: true,
      browser: 'chromium'
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'frontend',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}