import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_wittebrug.nl_pzu', ['https://wittebrug.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
