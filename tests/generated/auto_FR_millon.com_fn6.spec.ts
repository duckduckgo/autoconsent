import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_millon.com_fn6', ['https://www.millon.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
