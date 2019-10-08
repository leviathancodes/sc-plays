const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({headless: true})
    const page = await browser.newPage()
    await page.setDefaultNavigationTimeout(20000); 

    await page.goto('https://soundcloud.com/nomad-fox')
    
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