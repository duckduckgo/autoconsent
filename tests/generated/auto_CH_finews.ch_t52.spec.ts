import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_finews.ch_t52', ['https://www.finews.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
