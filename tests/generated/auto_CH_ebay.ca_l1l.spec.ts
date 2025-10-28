import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ebay.ca_l1l', ['https://www.ebay.ca/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
