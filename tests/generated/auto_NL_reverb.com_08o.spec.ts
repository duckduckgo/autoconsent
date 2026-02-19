import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_reverb.com_08o', ['https://reverb.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
