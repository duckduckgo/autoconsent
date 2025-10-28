import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_ebay.com.au_1ps', ['https://www.ebay.com.au/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
