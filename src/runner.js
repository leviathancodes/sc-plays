const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({headless: true})
    const page = await browser.newPage()
    await page.setDefaultNavigationTimeout(20000); 

    await page.goto('https://soundcloud.com/nomad-fox')
    const title = await page.title()
    console.log(title)
    // const data = await page.evaluate(() => {
    //     const tracks = Array.from(document.querySelectorAll('.soundList__item'))
    //     return tracks.map(td => td.textContent)
    // })
    // play.forEach(track => {
    //     await track.click()
    //     setTimeout(() => {
    //        return
    //     }, 15000)
    // }) 
    async function playTracks() {
        const tracks = await page.$$('.playButton')

        for (track of tracks) {
            await track.click()
            await page.waitFor(15000)
        }
    }

    await playTracks();
    await browser.close();
  })()