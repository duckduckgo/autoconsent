import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_pornoxo.com_ju5', ['https://www.pornoxo.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
