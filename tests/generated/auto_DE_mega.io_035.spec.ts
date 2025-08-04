import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_mega.io_035', ['https://mega.io/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
