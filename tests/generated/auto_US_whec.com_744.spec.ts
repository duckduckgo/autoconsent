import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_whec.com_744', ['https://www.whec.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
