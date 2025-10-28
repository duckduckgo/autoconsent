import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_fender.com_jlo', ['https://www.fender.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
