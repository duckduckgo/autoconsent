import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_transn.ch_pg0', ['https://www.transn.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
