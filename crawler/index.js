const process = require('process');
const { Cluster } = require('puppeteer-cluster');
const readline = require('readline');
const fs = require('fs');
const devices = require('puppeteer/DeviceDescriptors');

const cosmeticRules = require('../cosmetics/rules');
const reConsentCheck = require('./re-consent-checks');
const checkRules = require('./css-check');
const fanboyRules = require('./fanboy');

function getCosmeticsForSite(site) {
  return [
    ...cosmeticRules.site[site] || [],
    ...cosmeticRules.static,
  ];
}

const screenshotDir = '_site/screenshots';
fs.mkdirSync(screenshotDir, { recursive: true });

(async () => {
  const cluster = await Cluster.launch({
    concurrency: Cluster.CONCURRENCY_PAGE,
    maxConcurrency: 4,
    retryLimit: 2,
    puppeteerOptions: process.env.DISABLE_SANDBOX ? { args: ['--no-sandbox'] } : {},
  });

  async function discoverUrl(page, domain) {
    const candidates = [
      domain,
      `https://www.${domain}`,
      `https://${domain}`,
      `http://www.${domain}`,
      `http://${domain}`,
    ];
    for (let url of candidates) {
      try {
        await page.goto(url, {
          waitUntil: 'networkidle2',
          timeout: 100000,
        });
        return url;
      } catch (e) {
      }
    }
    throw new Error('no valid url found');
  }

  await cluster.task(async ({ page, data: site }) => {
    try {
      await page.emulate(devices['Pixel 2']);
      await discoverUrl(page, site);
      const reconsent = await reConsentCheck(page);
      const reconsentHidden = await checkRules(await getCosmeticsForSite(site), page);
      const fanboyHidden = await checkRules(await fanboyRules(), page);

      const result = {
        site,
        url: reconsent.url,
        reconsent: reconsent.rule,
        reconsentHidden,
        fanboyHidden,
      }

      const screenshotBasePath = `${screenshotDir}/${site.replace('https://', '').replace(/\//g, '_')}`;
      await page.screenshot({
        path: `${screenshotBasePath}_before.png`,
      });
      if (reconsent.rule) {
        try {
          result.reconsentCMPShown = await reconsent.isShown();
          if (result.reconsentCMPShown) {
            await reconsent.runOptOut();
            if (reconsent.testable) {
              await new Promise((res) => setTimeout(res, 5000));
              result.reconsentTest = await reconsent.test();
            }
          }
        } catch (e) {
          console.error(e);
          result.reconsentFailure = e.toString();
        }
      } else if (reconsentHidden) {
        await page.evaluate(hideElementsScript(reconsentHidden));
      }
      if (reconsent.rule || reconsentHidden.length > 0) {
        await new Promise((res) => setTimeout(res, 10000));
      }
      await page.screenshot({
        path: `${screenshotBasePath}_reconsent.png`,
      });

      result.postUrl = await page.url();
      console.log(JSON.stringify(result));
    } catch(e) {
      console.log(JSON.stringify({
        site,
        error: e.toString(),
      }));
    }
  });

  const lineReader = readline.createInterface({
    input: process.stdin,
  });

  lineReader.on('line', (line) => {
    cluster.queue(line.trim());
  });

  await new Promise((resolve) => {
    lineReader.once('close', resolve);
  });

  await cluster.idle();
  await cluster.close();
})();

function hideElementsScript(elements) {
  return `
  var parent = document.head || document.getElementsByTagName('head')[0] || document.documentElement;
  var rule = '${elements.join(',')} { display: none !important; }';
  var css = document.createElement('style');
  css.type = 'text/css';
  css.id = 're-consent-css-rules';
  css.appendChild(document.createTextNode(rule));
  parent.appendChild(css);
      `;
}