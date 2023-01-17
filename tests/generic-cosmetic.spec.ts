import generateCMPTests from "../playwright/runner";

generateCMPTests('generic-cosmetic', [
  'https://www.ama.org/',
  'https://www.migros.ch/de',
  'https://www.android.com/',
  'https://www.google.com/chrome/index.html',
], {
  testOptIn: false,
  onlyRegions: ['US'],
});
