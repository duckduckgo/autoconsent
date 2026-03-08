import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_dndi.org_ot2', ['https://dndi.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
