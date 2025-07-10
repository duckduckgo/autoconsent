import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_shop.id.me_e8j', ['https://shop.id.me/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
