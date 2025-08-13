import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_finanzdepot.ch_n6v', ['https://finanzdepot.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
