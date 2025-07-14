import generateCMPTests from "../playwright/runner";

generateCMPTests('cloudflare-zaraz', [
  'https://uk.bookshop.org/', 'https://mindmapwizard.com/',
]);
