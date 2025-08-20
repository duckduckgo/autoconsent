import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_numworks.com_yy3', ['https://www.numworks.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
