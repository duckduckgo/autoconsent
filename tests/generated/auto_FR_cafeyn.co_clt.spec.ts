import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cafeyn.co_clt', ['https://www.cafeyn.co/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
