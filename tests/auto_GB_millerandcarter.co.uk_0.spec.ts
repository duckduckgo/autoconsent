import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_millerandcarter.co.uk_0', ["https://www.millerandcarter.co.uk/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
