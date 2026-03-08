import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_aviapages.com_7y5', ['https://aviapages.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
