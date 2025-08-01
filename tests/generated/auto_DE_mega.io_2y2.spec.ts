import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_mega.io_2y2', ['https://mega.io/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
