import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_brugg.ch_yi4', ['https://www.brugg.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
