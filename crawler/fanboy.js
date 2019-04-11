const fs = require('fs');
const readline = require('readline');

const rules = [];
const lineReader = readline.createInterface({
  input: fs.createReadStream('./fanboy-cookiemonster.txt'),
});
lineReader.on('line', (line) => {
  if (line.startsWith('##')) {
    rules.push(line.slice(2))
  }
});
const rulesReady = new Promise((resolve) => {
  lineReader.on('close', resolve);
});

module.exports = async function getRules() {
  await rulesReady;
  return rules;
}
