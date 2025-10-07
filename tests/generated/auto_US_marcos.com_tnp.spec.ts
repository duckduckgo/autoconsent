import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_marcos.com_tnp', ['https://www.marcos.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
