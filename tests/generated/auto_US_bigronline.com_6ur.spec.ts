import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_bigronline.com_6ur', ['https://bigronline.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
