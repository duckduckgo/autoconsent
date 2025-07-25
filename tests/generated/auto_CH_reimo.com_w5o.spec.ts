import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_reimo.com_w5o', ['https://www.reimo.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
