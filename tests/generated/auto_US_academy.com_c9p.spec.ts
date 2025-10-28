import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_academy.com_c9p', ['https://www.academy.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
