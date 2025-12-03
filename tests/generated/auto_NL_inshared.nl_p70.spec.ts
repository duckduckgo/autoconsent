import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_inshared.nl_p70', ['https://www.inshared.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
