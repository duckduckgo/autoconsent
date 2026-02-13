import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_sprinklr.co_3ww', ['https://sprinklr.co/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
