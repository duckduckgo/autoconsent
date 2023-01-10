import generateCMPTests from "../playwright/runner";

generateCMPTests('EZoic', [
  'https://www.diyphotography.net/',
], {
  skipRegions: ['US'],
});
