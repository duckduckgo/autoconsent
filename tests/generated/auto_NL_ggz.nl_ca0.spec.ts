import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_ggz.nl_ca0', ['https://ggz.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
