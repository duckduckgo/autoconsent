import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_citroen.nl_sxp', ['https://www.citroen.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
