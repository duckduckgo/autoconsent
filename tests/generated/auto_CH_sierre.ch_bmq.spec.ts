import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_sierre.ch_bmq', ['https://www.sierre.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
