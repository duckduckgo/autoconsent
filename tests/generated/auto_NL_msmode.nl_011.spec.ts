import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_msmode.nl_011', ['https://www.msmode.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
