import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_fr.pornhub.com_0', ["https://fr.pornhub.com/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
