import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_aruntastic.com_6gl', ['https://aruntastic.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
