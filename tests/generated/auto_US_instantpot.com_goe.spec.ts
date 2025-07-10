import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_instantpot.com_goe', ['https://instantpot.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
