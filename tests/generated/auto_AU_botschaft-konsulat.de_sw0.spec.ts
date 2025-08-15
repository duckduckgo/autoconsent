import generateCMPTests from "../../playwright/runner";
generateCMPTests('auto_AU_botschaft-konsulat.de_sw0', ["https://botschaft-konsulat.de/"], {testOptIn: false, testSelfTest: true, onlyRegions: ["AU"]});
