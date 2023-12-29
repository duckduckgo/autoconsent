import generateCMPTests from "../playwright/runner";

generateCMPTests('1password-com', [
  'https://1password.com/product/mac/'
], {});
