import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_b-nord.ch_qy5', ['https://b-nord.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
