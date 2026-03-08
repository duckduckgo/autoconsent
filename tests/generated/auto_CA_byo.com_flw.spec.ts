import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_byo.com_flw', ['https://byo.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
