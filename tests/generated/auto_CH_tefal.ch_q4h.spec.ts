import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_tefal.ch_q4h', ['https://www.tefal.ch/fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
