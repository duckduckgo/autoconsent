import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_worx.com_lnb', ['https://www.worx.com/en_CA/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
