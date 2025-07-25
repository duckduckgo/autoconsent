import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_cornelsen.de_dr7', ['https://www.cornelsen.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
