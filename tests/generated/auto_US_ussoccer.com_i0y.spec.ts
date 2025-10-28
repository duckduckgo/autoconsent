import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_ussoccer.com_i0y', ['https://www.ussoccer.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
