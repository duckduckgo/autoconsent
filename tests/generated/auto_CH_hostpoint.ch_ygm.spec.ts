import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_hostpoint.ch_ygm', ['https://www.hostpoint.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
