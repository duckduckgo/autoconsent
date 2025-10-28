import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_neoprofs.org_2ht', ['https://www.neoprofs.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
