import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_codefling.com_1g1', ['https://codefling.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
