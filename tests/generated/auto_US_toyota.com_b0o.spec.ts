import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_toyota.com_b0o', ['https://www.toyota.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
