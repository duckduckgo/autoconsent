import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ginjfo.com_ckr', ['https://www.ginjfo.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
