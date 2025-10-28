import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ffjudo.com_5ye', ['https://www.ffjudo.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
