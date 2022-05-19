import { Builder, By, Capabilities, WebDriver} from "selenium-webdriver";

const chromedriver = require("chromedriver")

const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();

describe("practicing locaters", () => {
    beforeEach(async () =>{
        await driver.get('https://www.amazon.com/')
    })
    afterAll(async () => {
        await driver.quit()
    })
    const searchBar: By = By.xpath('//input[@id="twotabsearchtextbox"]')
    const results: By = By.css('[class = "a-section a-spacing-small a-spacing-top-small"]')
    
    test("search for something", async () => {
        await driver.findElement(searchBar).sendKeys("Star Wars Lego\n")
        let resultsText = await driver.findElement(results).getText()
        expect(resultsText).toContain("Star Wars Lego")
    })
})