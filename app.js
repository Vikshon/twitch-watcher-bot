const puppeteer = require('puppeteer');
require('dotenv').config();

async function main() {
    // Path to browser. Included browser do not support videos
    const browserPath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
    const browser = await puppeteer.launch({ headless: true, executablePath: browserPath, args:['--start-maximized'] });
    const page = await browser.newPage();
    const cookie = [{
        "domain": ".twitch.tv",
        "hostOnly": false,
        "httpOnly": false,
        "name": "auth-token",
        "path": "/",
        "sameSite": "no_restriction",
        "secure": true,
        "session": false,
        "storeId": "0",
        "id": 1,
        "value": process.env.token
    }];
    await page.setCookie(...cookie);    
    await page.setViewport({width: 1920, height: 900});
    await page.goto('https://www.twitch.tv/vovapain');
    await page.waitForTimeout(5000);
    await page.waitForTimeout(5000);
    await page.screenshot({path: 'ss.png'});
    // await browser.close();
}

main();