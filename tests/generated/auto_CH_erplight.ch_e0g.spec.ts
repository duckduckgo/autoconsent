import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_erplight.ch_e0g', ['https://erplight.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
