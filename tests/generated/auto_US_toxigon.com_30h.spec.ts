import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_toxigon.com_30h', ['https://toxigon.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
