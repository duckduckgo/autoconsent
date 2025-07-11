import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_ussoccer.com_b1o', ['https://www.ussoccer.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
