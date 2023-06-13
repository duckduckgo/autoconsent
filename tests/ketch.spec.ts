import generateCMPTests from "../playwright/runner";

generateCMPTests("ketch", [
  "https://www.smartsheet.com/",
  "https://www.ketch.com/",
  "https://www.patreon.com/",
]);
