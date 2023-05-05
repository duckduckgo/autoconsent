import generateCMPTests from "../playwright/runner";

generateCMPTests('ubuntu.com', [
  'https://ubuntu.com/',
], {});
