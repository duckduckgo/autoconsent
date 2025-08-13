import generateCMPTests from "../../playwright/runner";
generateCMPTests('auto_GB_botschaft-konsulat.de_a0w', ["https://botschaft-konsulat.de/"], {testOptIn: false, testSelfTest: true, onlyRegions: ["GB"]});
