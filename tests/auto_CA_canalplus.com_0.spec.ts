import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_CA_canalplus.com_0', ["https://www.canalplus.com/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["CA"]});
