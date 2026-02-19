import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_smkw.com_rae', ['https://smkw.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
