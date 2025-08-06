import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_dealabs.com_c3n', ['https://www.dealabs.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
