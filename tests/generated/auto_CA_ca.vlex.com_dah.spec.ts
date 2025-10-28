import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_ca.vlex.com_dah', ['https://ca.vlex.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
