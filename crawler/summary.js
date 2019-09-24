const readline = require('readline');

const lineReader = readline.createInterface({
  input: process.stdin,
});

const results = {
  crawled: 0,
}
const cmps = {};
const errors = [];
const hidden = {};
const recHidden = {};
const noAction = new Set();

lineReader.on('line', (line) => {
  const res = JSON.parse(line);
  if (res.error) {
    errors.push(res);
    return;
  }
  if (res.reconsentHidden && res.reconsentHidden.length > 0) {
    res.reconsentHidden.forEach((rule) => {
      if (!hidden[rule]) {
        hidden[rule] = 0;
      }
      hidden[rule] += 1;
    });
  } else if (res.fanboyHidden && res.fanboyHidden.length > 0 && !res.reconsent) {
    res.fanboyHidden.forEach((rule) => {
      if (!recHidden[rule]) {
        recHidden[rule] = 0;
      }
      recHidden[rule] += 1;
    });
  }
  results.crawled += 1;
  const key = res.reconsent || 'none';
  if (!cmps[key]) {
    cmps[key] = [];
  }
  cmps[key].push(res);

  if (!res.reconsent && (!res.reconsentHidden || res.reconsentHidden.length == 0)) {
    noAction.add(res.site);
  }
});

lineReader.on('close', () => {
  const { crawled } = results;
  console.log(`=== Crawled ${crawled} pages. ${errors.length} failures. ${noAction.size} broken ===`);

  console.log('No action:');
  noAction.forEach((site) => {
    console.log(`  - ${site}`)
  })

  console.log();
  console.log('CMPs:')
  Object.keys(cmps).forEach((cmp) => {
    const nSites = new Set(cmps[cmp].map(r => r.site)).size
    const cmpShown = cmps[cmp].filter(r => r.reconsentCMPShown).length;
    const cmpPass = cmps[cmp].filter(r => r.reconsentTest).length;
    console.log(`  - ${cmp}: ${nSites}/${cmpShown}/${cmpPass}`);
  });

  console.log();
  console.log('Cosmetics:');
  Object.keys(hidden).sort((a, b) => hidden[b] - hidden[a]).forEach((rule) => {
    console.log(`  - ${rule} : ${hidden[rule]}`)
  });

  console.log();
  console.log('New Cosmetics:');
  Object.keys(recHidden).sort((a, b) => recHidden[b] - recHidden[a]).forEach((rule) => {
    console.log(`  - ${rule} : ${recHidden[rule]}`)
  });
});
