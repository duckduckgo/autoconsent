import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_swissyp.com_jyo', ['https://www.swissyp.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
