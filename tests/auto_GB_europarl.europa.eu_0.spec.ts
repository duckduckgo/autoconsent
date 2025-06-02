import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_europarl.europa.eu_0', ["https://www.europarl.europa.eu/portal/en"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
