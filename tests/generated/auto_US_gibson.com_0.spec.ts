import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_gibson.com_0', ['https://www.gibson.com/en-US/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
