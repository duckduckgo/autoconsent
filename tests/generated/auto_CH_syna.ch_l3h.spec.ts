import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_syna.ch_l3h', ['https://syna.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
