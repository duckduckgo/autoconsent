import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lacimade.org_4ge', ['https://www.lacimade.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
