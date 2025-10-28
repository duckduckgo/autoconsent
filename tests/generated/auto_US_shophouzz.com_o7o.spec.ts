import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_shophouzz.com_o7o', ['https://shophouzz.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
