import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_bangbros.com_oi7', ['https://bangbros.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
