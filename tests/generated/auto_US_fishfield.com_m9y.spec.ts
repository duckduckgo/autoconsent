import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_fishfield.com_m9y', ['https://fishfield.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
