import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_sofoot.com_xn7', ['https://www.sofoot.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
