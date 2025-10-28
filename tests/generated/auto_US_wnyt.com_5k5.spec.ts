import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_wnyt.com_5k5', ['https://wnyt.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
