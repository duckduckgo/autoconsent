import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_sheplers.com_ii7', ['https://www.sheplers.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
