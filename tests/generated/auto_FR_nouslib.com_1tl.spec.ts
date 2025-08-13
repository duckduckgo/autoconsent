import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_nouslib.com_1tl', ['https://www.nouslib.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
