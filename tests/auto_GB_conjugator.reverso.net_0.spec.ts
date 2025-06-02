import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_conjugator.reverso.net_0', ["https://conjugator.reverso.net/conjugation-english.html"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
