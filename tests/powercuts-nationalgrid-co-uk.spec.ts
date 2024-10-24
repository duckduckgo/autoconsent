import generateCMPTests from "../playwright/runner";

generateCMPTests('powercuts-nationalgrid-co-uk', [
  'https://powercuts.nationalgrid.co.uk/'
], {});
