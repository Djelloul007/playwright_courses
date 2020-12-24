const { chromium,webkit,firefox } = require('playwright');

(async () => {
  //launch Browser
  const browser = await firefox.launch({headless:false});

  //create a context
  const context = await browser.newContext();

  // Open new page (Browser Tab)
  const page = await context.newPage();

  // Go to http://whatsmyuseragent.org/
  await page.goto('http://whatsmyuseragent.org/');

  // take screenshot
  await page.screenshot({ path: `my_screenshot.png` });

  // Close page
  await page.close();

  // ---------------------
  await context.close();
  await browser.close();
})();
