import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_xpo.com_w95', ['https://www.xpo.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
