import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_rataplan.nl_354', ['https://rataplan.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
