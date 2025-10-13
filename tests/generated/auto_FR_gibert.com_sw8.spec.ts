import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_gibert.com_sw8', ['https://www.gibert.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
