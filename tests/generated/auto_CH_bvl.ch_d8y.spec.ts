import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bvl.ch_d8y', ['https://bvl.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
