import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bvger.ch_k6u', ['https://www.bvger.ch/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
