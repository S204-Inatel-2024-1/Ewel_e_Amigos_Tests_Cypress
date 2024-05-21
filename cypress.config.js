const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners aqui
    },
    video: true,
    videosFolder: "cypress/videos",
    screenshotsFolder: "cypress/screenshots",
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: false,
      html: true,
      json: false
    }
  }
});
