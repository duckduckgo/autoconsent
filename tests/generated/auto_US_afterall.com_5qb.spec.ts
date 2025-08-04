import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_afterall.com_5qb', ['https://www.afterall.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
