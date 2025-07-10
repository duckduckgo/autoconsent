import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_hodinkee.com_t2o', ['https://www.hodinkee.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
