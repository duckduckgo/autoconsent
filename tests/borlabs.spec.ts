import generateCMPTests from "../playwright/runner";

generateCMPTests('borlabs', [
  'https://www.experto.de/', 'https://www.kesselheld.de/'
], {
  skipRegions: ["US"]
});
