import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_thezebra.com_lpo', ['https://www.thezebra.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
