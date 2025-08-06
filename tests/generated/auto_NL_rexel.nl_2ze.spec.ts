import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_rexel.nl_2ze', ['https://www.rexel.nl/nln/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
