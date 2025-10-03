import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_tiemeyer.de_fm6', ['https://www.tiemeyer.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
