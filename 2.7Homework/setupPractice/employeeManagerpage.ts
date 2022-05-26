import { Builder, By, Capabilities, until, WebDriver, WebElement, Key} from "selenium-webdriver";

const chromedriver = require("chromedriver")

const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();

export class employeePage {
    driver:WebDriver
    url: string = 'https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html'
    bernice: By = By.name("employee1");
    marnie: By = By.name("employee2");
    phillip: By = By.name("employee3");
    nameDisplay: By = By.id("employeeTitle");
    nameInput: By = By.name("nameEntry");
    phoneInput: By = By.name("phoneEntry");
    titleInput: By = By.name("titleEntry");
    saveButton: By = By.id("saveBtn");
    cancelButton: By = By.name("cancel");
    errorCard: By = By.css(".errorCard");
    addEmployee: By = By.name("addEmployee")
  
    constructor(driver: WebDriver){
      this.driver = driver
    }
    async getElement(elementBy: By): Promise<WebElement> {
        await this.driver.wait(until.elementLocated(elementBy))
        let element = await this.driver.findElement(elementBy)
        await this.driver.wait(until.elementIsVisible(element))
        return element
    }
    async click(elementBy:By): Promise<void> {
        return(await this.getElement(elementBy)).click()
    }
    async setInput(elementBy: By, keys: any): Promise<void> {
        let input = await this.getElement(elementBy)
        await input.clear()
        return input.sendKeys(keys)
    }
    async getText(elementBy: By): Promise<string> {
        return (await this.getElement(elementBy)).getText()
    }
    async getAttribute(elementBy: By, attribute: string): Promise<string> {
        return (await this.getElement(elementBy)).getAttribute(attribute)
    }
}
