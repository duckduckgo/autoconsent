import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_pukzh.ch_9zi', ['https://www.pukzh.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
