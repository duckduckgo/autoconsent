import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_lilly.com_lh6', ['https://www.lilly.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
