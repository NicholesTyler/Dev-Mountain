import {Builder, By, Capabilities} from "selenium-webdriver"

const chromedriver =require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

test("using an array in our search", async () => {
    let mySearches: Array<string> = [
        "Puppies",
        "Penguins",
        "Multiverse of Madness",
        "Marvel"
    ]

    let search = async (driver, search) => {
        let searchBar = await driver.findElement(By.name('q'))
        await searchBar.clear()
        await searchBar.sendKeys(`${search}\n`)
        let results = await driver.findElement(By.id('res'))
        let resultsText = await results.getText()
        resultsText = resultsText.toLowerCase()
        expect(resultsText).toContain(search.toLowerCase())
    }

    await driver.get('https://www.google.com/')
    for(let i = 0; i <mySearches.length; i++) {
        await search(driver, mySearches[i])
    }
    await driver.quit()
})