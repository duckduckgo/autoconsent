import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_mega.io_1wo', ['https://mega.io/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
