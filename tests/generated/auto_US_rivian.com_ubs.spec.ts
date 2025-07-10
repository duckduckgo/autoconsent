import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_rivian.com_ubs', ['https://rivian.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
