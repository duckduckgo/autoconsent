import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_cornelsen.de_0u4', ['https://www.cornelsen.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
