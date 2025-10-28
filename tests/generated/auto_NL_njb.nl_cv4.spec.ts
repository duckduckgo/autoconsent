import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_njb.nl_cv4', ['https://www.njb.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
