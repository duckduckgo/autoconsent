import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_AU_lectura-specs.com_s4r', ["https://www.lectura-specs.com/en"], {testOptIn: false, testSelfTest: false, onlyRegions: ["AU"]});
