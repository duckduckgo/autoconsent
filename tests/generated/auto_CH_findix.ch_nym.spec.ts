import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_findix.ch_nym', ['https://www.findix.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
