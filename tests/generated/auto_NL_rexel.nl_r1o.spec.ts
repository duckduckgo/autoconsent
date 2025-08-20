import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_rexel.nl_r1o', ['https://www.rexel.nl/nln/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
