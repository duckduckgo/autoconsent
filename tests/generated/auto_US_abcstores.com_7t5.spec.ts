import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_abcstores.com_7t5', ['https://abcstores.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
