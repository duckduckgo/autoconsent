import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_xpo.com_3m5', ['https://www.xpo.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
