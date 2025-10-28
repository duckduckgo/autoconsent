import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_palliaweb.nl_fx4', ['https://palliaweb.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
