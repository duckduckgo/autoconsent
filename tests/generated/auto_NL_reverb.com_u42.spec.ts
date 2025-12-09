import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_reverb.com_u42', ['https://reverb.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
