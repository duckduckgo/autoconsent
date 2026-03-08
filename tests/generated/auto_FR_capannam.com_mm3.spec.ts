import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_capannam.com_mm3', ['https://capannam.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
