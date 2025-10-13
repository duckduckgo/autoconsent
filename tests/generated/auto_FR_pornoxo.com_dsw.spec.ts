import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_pornoxo.com_dsw', ['https://www.pornoxo.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
