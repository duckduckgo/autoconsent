import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_chiway.ch_u1x', ['https://chiway.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
