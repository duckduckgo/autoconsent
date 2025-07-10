import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_sixflags.com_gv8', ['https://www.sixflags.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
