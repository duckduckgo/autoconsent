import generateCMPTests from "../playwright/runner";

generateCMPTests('Test page cosmetic CMP', [
  'https://privacy-test-pages.glitch.me/features/autoconsent/banner.html'
]);
