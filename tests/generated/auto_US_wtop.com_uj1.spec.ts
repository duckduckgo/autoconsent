import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_wtop.com_uj1', ['https://wtop.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
