import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_forjaly.com_cg2', ['https://forjaly.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
