import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_fastholic.com_235', ['https://fastholic.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
