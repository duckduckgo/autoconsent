import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_AU_dahuasecurity.com_3sl', ["https://www.dahuasecurity.com/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["AU"]});
