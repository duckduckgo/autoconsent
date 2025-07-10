import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_boston.com_od8', ['https://www.boston.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
