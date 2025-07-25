import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_citroen.ch_9zk', ['https://www.citroen.ch/de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
