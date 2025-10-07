import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_marcos.com_n7e', ['https://www.marcos.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
