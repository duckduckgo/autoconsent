import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_AU_johnlewis.com_0', ["https://www.johnlewis.com/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["AU"]});
