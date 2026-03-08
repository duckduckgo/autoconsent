import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_banabuddy.com_hss', ['https://banabuddy.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
