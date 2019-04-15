const { getCosmeticsForSite } = require('./');

const rules = getCosmeticsForSite();
console.log(`${rules.join(',')} { display: none !important; }`);
