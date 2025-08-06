import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_toto.nl_3p9', ['https://www.toto.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
