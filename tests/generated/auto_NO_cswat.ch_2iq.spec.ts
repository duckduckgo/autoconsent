import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_cswat.ch_2iq', ['https://cswat.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
