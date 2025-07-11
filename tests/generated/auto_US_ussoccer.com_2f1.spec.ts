import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_ussoccer.com_2f1', ['https://www.ussoccer.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
