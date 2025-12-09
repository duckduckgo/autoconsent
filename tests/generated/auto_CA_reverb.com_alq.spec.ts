import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_reverb.com_alq', ['https://reverb.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
