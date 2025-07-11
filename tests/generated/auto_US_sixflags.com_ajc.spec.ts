import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_sixflags.com_ajc', ['https://www.sixflags.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
