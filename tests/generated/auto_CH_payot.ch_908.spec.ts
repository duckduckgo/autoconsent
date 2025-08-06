import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_payot.ch_908', ['https://www.payot.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
