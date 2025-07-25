import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_numworks.com_5qj', ['https://www.numworks.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
