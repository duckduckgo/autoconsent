import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_tchatche.com_5r8', ['https://www.tchatche.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
