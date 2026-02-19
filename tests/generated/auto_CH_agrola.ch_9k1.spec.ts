import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_agrola.ch_9k1', ['https://agrola.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
