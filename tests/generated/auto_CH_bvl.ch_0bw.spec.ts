import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bvl.ch_0bw', ['https://bvl.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
