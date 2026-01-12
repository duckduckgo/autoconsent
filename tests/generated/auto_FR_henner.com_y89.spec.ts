import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_henner.com_y89', ['https://www.henner.com/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
