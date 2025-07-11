import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_recology.com_0', ['https://www.recology.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
