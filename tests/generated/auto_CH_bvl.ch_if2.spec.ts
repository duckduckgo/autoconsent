import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bvl.ch_if2', ['https://bvl.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
