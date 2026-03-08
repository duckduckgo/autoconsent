import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_contrel.com_ln5', ['https://contrel.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
