import generateCMPTests from "../../playwright/runner";
generateCMPTests('auto_CH_botschaft-konsulat.de_4sp', ["https://botschaft-konsulat.de/"], {testOptIn: false, testSelfTest: true, onlyRegions: ["CH"]});
