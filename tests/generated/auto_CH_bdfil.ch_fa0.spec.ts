import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bdfil.ch_fa0', ['https://bdfil.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
