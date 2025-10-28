import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ebay.at_qbt', ['https://www.ebay.at/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
