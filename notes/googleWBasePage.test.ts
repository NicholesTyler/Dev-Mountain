import { Driver } from 'selenium-webdriver/chrome'
import { findSafariDriver } from 'selenium-webdriver/safari'
import {Google} from './baseGooglepage'
const fs = require('fs')
const google = new Google()


test('do a search', async () => {
    await google.navigate()
    await google.search('Twix Bars')
    let text = await google.getResults()
    expect(text).toContain('Twix Bars')
    await fs.writeFile(`${__dirname}/google.png`, 
     await google.driver.takeScreenshot(), "base64",
      (e) => {
         if (e) console.error(e)
         else console.log('Save Succesful')
    }
    )
    fs.writeFile(`${__dirname}/test.txt`, text, (e) => {
        if (e) console.error(e)
        else console.log('save Succesful')
    })

})
afterAll(async () => {
    await google.driver.quit()
})
