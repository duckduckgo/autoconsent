import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_gayporn.com_0', ['https://gayporn.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
