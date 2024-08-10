const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');

  const data = await page.evaluate(() => {
    return document.querySelector('h1').innerText;
  });

  console.log(data); // Output: Extracted data from the website
  await browser.close();
})();
