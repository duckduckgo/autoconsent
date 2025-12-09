import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_smkw.com_p15', ['https://smkw.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
