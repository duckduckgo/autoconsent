import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_cta.ch_svx', ['https://cta.ch/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
