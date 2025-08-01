import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_fvd.nl_qbs', ['https://fvd.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
