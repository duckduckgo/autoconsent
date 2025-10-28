import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_skello.io_hd9', ['https://www.skello.io/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
