import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_academy.com_hqz', ['https://www.academy.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
