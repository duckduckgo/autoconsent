import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bsb.ch_7q8', ['https://www.bsb.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
