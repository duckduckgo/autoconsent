import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_baleine.ch_xcy', ['https://baleine.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
