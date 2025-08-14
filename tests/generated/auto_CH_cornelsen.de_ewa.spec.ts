import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_cornelsen.de_ewa', ['https://www.cornelsen.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
