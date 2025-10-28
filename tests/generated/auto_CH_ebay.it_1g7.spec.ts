import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ebay.it_1g7', ['https://www.ebay.it/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
