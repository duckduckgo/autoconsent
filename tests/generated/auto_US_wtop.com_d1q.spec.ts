import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_wtop.com_d1q', ['https://wtop.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
