import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_burpee.com_8gz', ['https://www.burpee.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
