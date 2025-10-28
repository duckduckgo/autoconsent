import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_ebay.ie_i0i', ['https://www.ebay.ie/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
