import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cafeyn.co_k1r', ['https://www.cafeyn.co/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
