import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_adameve.com_72k', ['https://www.adameve.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
