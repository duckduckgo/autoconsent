import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_wolky.ch_l9f', ['https://www.wolky.ch/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
