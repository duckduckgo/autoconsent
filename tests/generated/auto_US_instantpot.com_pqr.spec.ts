import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_instantpot.com_pqr', ['https://instantpot.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
