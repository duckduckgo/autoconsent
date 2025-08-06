import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_swoodoo.com_41u', ['https://www.swoodoo.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
