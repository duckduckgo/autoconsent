import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_reverb.com_wqh', ['https://reverb.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
