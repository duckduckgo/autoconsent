import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_vss.ch_dac', ['https://www.vss.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
