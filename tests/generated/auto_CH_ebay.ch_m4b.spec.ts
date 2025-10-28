import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ebay.ch_m4b', ['https://www.ebay.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
