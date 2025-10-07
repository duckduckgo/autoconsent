import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_csd.ch_u97', ['https://www.csd.ch/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
