import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_kentucky.com_0', ['https://www.kentucky.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
