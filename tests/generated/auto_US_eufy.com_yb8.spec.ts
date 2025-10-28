import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_eufy.com_yb8', ['https://www.eufy.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
