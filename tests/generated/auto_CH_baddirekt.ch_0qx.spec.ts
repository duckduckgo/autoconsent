import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_baddirekt.ch_0qx', ['https://www.baddirekt.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
