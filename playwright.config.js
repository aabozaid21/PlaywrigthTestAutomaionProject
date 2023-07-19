
const { defineConfig, devices } = require('@playwright/test');


/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests',
  // fullyParallel: true,
  //mode: 'serial',
  reporter: 'html',
  globalTimeout: 6000000,
  use: {

    trace: 'on-first-retry',
    headless: false,
    video: 'on',

    launchOptions: {
      //slowMo: 1000
    },

  },

  projects: [

    {
      name: 'firefox',
      use: {
        ...devices['chromnuim'],
        screenshot: 'on',

      },


    },


  ],


});

