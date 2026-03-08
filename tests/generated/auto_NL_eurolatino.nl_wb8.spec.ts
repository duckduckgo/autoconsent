import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_eurolatino.nl_wb8', ['https://eurolatino.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
