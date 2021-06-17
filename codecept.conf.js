exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://music.youtube.com',
      show: true,
      browser: 'chromium'
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'webautomation-youtubemusic',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}