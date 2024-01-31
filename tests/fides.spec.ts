import generateCMPTests from "../playwright/runner";

generateCMPTests('fides', [
  'https://www.nytimes.com/',
]);
