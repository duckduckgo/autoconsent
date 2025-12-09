import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_wolky.ch_9jo', ['https://www.wolky.ch/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
