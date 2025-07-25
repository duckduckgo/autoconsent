import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_proforto.nl_gfy', ['https://proforto.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
