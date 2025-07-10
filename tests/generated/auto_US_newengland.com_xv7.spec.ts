import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_newengland.com_xv7', ['https://newengland.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
