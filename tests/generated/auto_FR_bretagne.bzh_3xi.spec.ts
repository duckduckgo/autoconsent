import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bretagne.bzh_3xi', ['https://www.bretagne.bzh/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
