const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: true,
    videosFolder: "cypress/videos",
    screenshotsFolder: "cypress/screenshots",
    reporter: "junit",
    reporterOptions: {
      mochaFile: "cypress/reports/results-[hash].xml",
      toConsole: true
    }
  }
});
