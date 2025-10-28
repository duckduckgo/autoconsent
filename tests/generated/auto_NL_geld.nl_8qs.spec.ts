import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_geld.nl_8qs', ['https://www.geld.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
