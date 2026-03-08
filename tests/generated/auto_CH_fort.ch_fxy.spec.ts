import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fort.ch_fxy', ['https://fort.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
