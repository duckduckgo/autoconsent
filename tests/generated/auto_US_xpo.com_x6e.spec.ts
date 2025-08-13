import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_xpo.com_x6e', ['https://www.xpo.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
