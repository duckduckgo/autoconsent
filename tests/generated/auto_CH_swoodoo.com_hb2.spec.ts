import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_swoodoo.com_hb2', ['https://www.swoodoo.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
