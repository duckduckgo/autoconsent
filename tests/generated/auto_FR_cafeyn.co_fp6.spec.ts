import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cafeyn.co_fp6', ['https://www.cafeyn.co/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
