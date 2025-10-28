import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_wilfa.com_fjb', ['https://wilfa.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
