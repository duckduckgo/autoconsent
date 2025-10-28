import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_clubic.com_dpa', ['https://www.clubic.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
