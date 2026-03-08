import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_chstiftung.ch_j6o', ['https://chstiftung.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
