const fs = require('fs');
const readline = require('readline');
const ejs = require('ejs');

const lineReader = readline.createInterface({
  input: process.stdin,
});

const results = {}
const errors = []

lineReader.on('line', (line) => {
  const res = JSON.parse(line);
  if (res.error) {
    errors.push(res);
  } else {
    const key = res.reconsent || 'none';
    if (!results[key]) {
      results[key] = [];
    }
    results[key].push(res);
  }
});

lineReader.on('close', () => {
  ejs.renderFile('crawler/views/index.ejs', {
    title: 'Re:Consent crawler results',
    results
  }, (err, output) => {
    if (err) {
      console.error(err);
      return;
    }
    fs.writeFileSync('_site/index.html', output);
  });
  Object.keys(results).forEach((name) => {
    ejs.renderFile('crawler/views/cmp.ejs', {
      title: `Re:Consent crawler results: ${name}`,
      results: results[name]
    }, (err, output) => {
      if (err) {
        console.error(err);
        return;
      }
      fs.writeFileSync(`_site/${name}.html`, output);
    });
  });
});
