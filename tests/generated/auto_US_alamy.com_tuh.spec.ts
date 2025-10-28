import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_alamy.com_tuh', ['https://www.alamy.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
