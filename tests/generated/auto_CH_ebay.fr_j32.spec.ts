import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ebay.fr_j32', ['https://www.ebay.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
