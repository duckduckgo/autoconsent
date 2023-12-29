import generateCMPTests from "../playwright/runner";

generateCMPTests('burpee.com', [
  'https://www.burpee.com/',
  'https://granit.com/se'
], {});
