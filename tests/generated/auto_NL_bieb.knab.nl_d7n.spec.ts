import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_bieb.knab.nl_d7n', ['https://bieb.knab.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
