import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_shopify.com_0', ['https://www.shopify.com/uk'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
