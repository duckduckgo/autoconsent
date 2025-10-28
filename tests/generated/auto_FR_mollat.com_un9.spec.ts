import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_mollat.com_un9', ['https://www.mollat.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
