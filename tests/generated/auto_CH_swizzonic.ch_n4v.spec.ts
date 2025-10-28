import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_swizzonic.ch_n4v', ['https://www.swizzonic.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
