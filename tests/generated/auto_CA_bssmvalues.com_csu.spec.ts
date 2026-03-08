import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_bssmvalues.com_csu', ['https://bssmvalues.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
