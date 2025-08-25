import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_maty.com_2v7', ['https://www.maty.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
