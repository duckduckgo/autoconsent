import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_gibert.com_ygq', ['https://www.gibert.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
