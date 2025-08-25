import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_3djake.nl_8u0', ['https://www.3djake.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
