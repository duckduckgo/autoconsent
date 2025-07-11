import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_tinder.com_0', ['https://tinder.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
