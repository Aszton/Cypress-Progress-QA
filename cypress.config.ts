import { defineConfig } from "cypress";

export default defineConfig({
  chromeWebSecurity: false,
  e2e: {
    baseUrl: "https://automationteststore.com/",
    viewportWidth: 1440,
    viewportHeight: 900,
    defaultCommandTimeout: 7000,
    pageLoadTimeout: 15000,
    requestTimeout: 5000,
    setupNodeEvents(on, config) {},
  },
});
