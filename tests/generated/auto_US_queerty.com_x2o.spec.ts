import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_queerty.com_x2o', ['https://www.queerty.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
