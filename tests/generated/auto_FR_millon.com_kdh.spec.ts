import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_millon.com_kdh', ['https://www.millon.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
