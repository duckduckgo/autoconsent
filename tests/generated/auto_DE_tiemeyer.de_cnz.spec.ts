import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_tiemeyer.de_cnz', ['https://www.tiemeyer.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
