import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_fvd.nl_pxy', ['https://fvd.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
