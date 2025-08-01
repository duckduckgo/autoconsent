import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_msmode.nl_ng1', ['https://www.msmode.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
