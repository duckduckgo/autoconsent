import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bitget.com_14c', ['https://www.bitget.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
