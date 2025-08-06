import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_swoodoo.ch_1ms', ['https://www.swoodoo.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
