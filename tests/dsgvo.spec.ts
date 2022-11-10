import generateCMPTests from "../playwright/runner";

generateCMPTests('WP DSGVO Tools', [
  'https://ccmedia.ch/',
  'https://rlalpbsl.web.belwue.de/',
  'https://www.mathe-lerntipps.de/',
], {
  skipRegions: ['US']
});
