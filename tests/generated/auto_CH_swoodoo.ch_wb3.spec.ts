import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_swoodoo.ch_wb3', ['https://www.swoodoo.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
