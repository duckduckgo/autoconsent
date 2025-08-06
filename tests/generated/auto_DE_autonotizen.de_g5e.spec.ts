import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_autonotizen.de_g5e', ['https://autonotizen.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
