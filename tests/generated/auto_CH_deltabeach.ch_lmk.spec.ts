import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_deltabeach.ch_lmk', ['https://en.deltabeach.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
