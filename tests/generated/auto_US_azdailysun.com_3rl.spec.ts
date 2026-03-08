import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_azdailysun.com_3rl', ['https://azdailysun.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
