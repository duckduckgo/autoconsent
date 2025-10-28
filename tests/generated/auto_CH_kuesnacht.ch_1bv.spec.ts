import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_kuesnacht.ch_1bv', ['https://www.kuesnacht.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
