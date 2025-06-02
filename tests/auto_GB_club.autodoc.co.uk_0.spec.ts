import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_club.autodoc.co.uk_0', ["https://club.autodoc.co.uk/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
