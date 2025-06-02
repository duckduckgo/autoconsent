import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_onetraveller.co.uk_0', ["https://www.onetraveller.co.uk/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
