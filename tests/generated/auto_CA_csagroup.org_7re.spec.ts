import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_csagroup.org_7re', ['https://www.csagroup.org/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
