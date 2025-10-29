import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_foxtrail.ch_kx2', ['https://foxtrail.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
