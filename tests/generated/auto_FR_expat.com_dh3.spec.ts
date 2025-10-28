import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_expat.com_dh3', ['https://www.expat.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
