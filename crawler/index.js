const { Cluster } = require('puppeteer-cluster');
const readline = require('readline');
const { once } = require('events');

const { getCosmeticsForSite } = require('../');
const reConsentCheck = require('./re-consent-checks');
const checkRules = require('./css-check');
const fanboyRules = require('./fanboy');

(async () => {
  const cluster = await Cluster.launch({
    concurrency: Cluster.CONCURRENCY_PAGE,
    maxConcurrency: 8,
    retryLimit: 4,
  });

  async function discoverUrl(page, domain) {
    const candidates = [
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
      console.log(`load ${site}`);
      await discoverUrl(page, site);
      const reconsent = await reConsentCheck(page);
      const reconsentHidden = await checkRules(await getCosmeticsForSite(site), page);
      const fanboyHidden = await checkRules(await fanboyRules(), page);
      console.log(JSON.stringify({
        site,
        url: reconsent.url,
        reConsent: reconsent.rule,
        reconsentHidden,
        fanboyHidden,
      }));
    } catch(e) {
      console.log({
        site,
        error: e.toString(),
      });
    }
  });

  const lineReader = readline.createInterface({
    input: process.stdin,
  });

  lineReader.on('line', (line) => {
    cluster.queue(line.trim());
  });

  await once(lineReader, 'close');

  await cluster.idle();
  await cluster.close();
})();