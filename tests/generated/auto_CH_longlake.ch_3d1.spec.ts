import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_longlake.ch_3d1', ['https://www.longlake.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
