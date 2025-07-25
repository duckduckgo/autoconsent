import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_test.se_0dq', ['https://www.test.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
