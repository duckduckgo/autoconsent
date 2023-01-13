import generateCMPTests from "../playwright/runner";

generateCMPTests('usercentrics-api', [
  'https://hornbach.de',
  'https://dm.de',
  'https://usercentrics.com/',
  'https://shopbetreiber-blog.de/',
], {
  skipRegions: ["US", "GB", "FR"]
}
);
