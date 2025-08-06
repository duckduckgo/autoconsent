import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_jetcamp.com_ckk', ['https://www.jetcamp.com/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
