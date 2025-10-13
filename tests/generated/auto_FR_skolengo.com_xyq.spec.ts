import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_skolengo.com_xyq', ['https://www.skolengo.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
