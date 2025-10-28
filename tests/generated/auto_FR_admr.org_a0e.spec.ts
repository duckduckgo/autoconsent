import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_admr.org_a0e', ['https://www.admr.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
