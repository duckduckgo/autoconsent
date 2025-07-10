import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_puritan.com_fer', ['https://www.puritan.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
