import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_newengland.com_43a', ['https://newengland.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
