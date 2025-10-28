import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_sixflags.com_x0h', ['https://www.sixflags.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
