import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_hyrox.com_mv0', ['https://hyrox.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
