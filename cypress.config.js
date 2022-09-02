const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'bn58xg',
  e2e: {
    projectId: "3es4mx",
    setupNodeEvents(on, config) {
    
      // implement node event listeners here
    },
  },
});
