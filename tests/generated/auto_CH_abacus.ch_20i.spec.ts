import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_abacus.ch_20i', ['https://www.abacus.ch/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
