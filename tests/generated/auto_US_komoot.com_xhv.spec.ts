import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_komoot.com_xhv', ['https://www.komoot.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
