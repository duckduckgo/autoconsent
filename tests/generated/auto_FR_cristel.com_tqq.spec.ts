import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cristel.com_tqq', ['https://www.cristel.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
