import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_familiebank.nl_t2f', ['https://familiebank.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
