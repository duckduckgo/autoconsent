import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cyclable.com_8kr', ['https://www.cyclable.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
