import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bing.com_tt4', ['https://www.bing.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
