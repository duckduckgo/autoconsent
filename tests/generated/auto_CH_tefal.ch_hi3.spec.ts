import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_tefal.ch_hi3', ['https://www.tefal.ch/fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
