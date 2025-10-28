import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_inspire.com_cbk', ['https://www.inspire.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
