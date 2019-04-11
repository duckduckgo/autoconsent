
module.exports = async function checkRules(rules, page) {
  const matches = [];
  for (let rule of rules) {
    const elem = await page.$(rule);
    if (elem) {
      matches.push(rule);
    }
  }
  return matches;
}
