import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_toxigon.com_g4o', ['https://toxigon.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
