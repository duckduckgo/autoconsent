import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_ebay.nl_cq1', ['https://www.ebay.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
