import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_avery.com_ynf', ['https://www.avery.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
