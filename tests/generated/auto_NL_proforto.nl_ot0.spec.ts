import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_proforto.nl_ot0', ['https://proforto.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
