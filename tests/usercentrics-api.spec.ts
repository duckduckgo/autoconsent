import generateCMPTests from "../playwright/runner";

generateCMPTests('usercentrics-api', [
  'https://hornbach.de',
  'https://dm.de',
  'https://usercentrics.com/',
], {
  skipRegions: ["US", "GB", "FR"]
}
);
