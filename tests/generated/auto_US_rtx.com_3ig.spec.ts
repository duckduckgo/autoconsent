import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_rtx.com_3ig', ['https://www.rtx.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
