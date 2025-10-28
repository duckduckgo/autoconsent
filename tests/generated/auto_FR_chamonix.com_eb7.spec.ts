import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_chamonix.com_eb7', ['https://www.chamonix.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
