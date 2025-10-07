import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_abacus.ch_z3w', ['https://www.abacus.ch/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
