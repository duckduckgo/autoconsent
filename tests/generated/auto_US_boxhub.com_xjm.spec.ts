import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_boxhub.com_xjm', ['https://boxhub.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
