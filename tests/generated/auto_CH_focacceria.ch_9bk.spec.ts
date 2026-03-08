import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_focacceria.ch_9bk', ['https://focacceria.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
