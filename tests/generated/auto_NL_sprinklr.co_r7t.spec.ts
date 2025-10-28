import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_sprinklr.co_r7t', ['https://sprinklr.co/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
