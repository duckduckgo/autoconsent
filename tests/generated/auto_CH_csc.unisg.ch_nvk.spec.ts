import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_csc.unisg.ch_nvk', ['https://csc.unisg.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
