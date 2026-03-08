import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_akusoli.com_b5a', ['https://akusoli.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
