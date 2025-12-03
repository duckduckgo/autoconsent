import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_reimo.com_t8u', ['https://www.reimo.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
