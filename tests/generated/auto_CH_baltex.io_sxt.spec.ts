import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_baltex.io_sxt', ['https://baltex.io/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
