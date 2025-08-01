import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_csagroup.org_3ho', ['https://www.csagroup.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
