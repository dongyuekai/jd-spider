import puppeteer from 'puppeteer'

const browser = await puppeteer.launch({
  headless: false, // headless为false也就是有界面
  defaultViewport: {
    // width、height为0是网页内容充满整个窗口
    width: 0,
    height: 0
  }
})

const page = await browser.newPage()

// await page.goto('https://www.zhipin.com/web/geek/job')

// await page.waitForSelector('.job-list-box')

// await page.click('.city-label', {
//   delay: 500
// })

// await page.click('.city-list-hot li:first-child', {
//   delay: 500
// })

// await page.focus('.search-input-box input')

// await page.keyboard.type('前端', {
//   delay: 200
// })

// await page.click('.search-btn', {
//   delay: 1000
// })

await page.goto('https://www.zhipin.com/web/geek/job?query=前端&city=100010000')

await page.waitForSelector('.job-list-box')