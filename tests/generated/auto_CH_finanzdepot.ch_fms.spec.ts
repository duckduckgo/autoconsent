import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_finanzdepot.ch_fms', ['https://finanzdepot.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
