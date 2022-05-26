import { employeePage } from "./employeeManagerpage";

const chromedriver = require("chromedriver");

import { WebDriver, Builder, Capabilities } from "selenium-webdriver";

const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

const page = new employeePage(driver);

test("create new employee", async () => {
    await page.navigate();

})