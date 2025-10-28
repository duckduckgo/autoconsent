import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ebay.com_8oc', ['https://www.ebay.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
