import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_gadero.nl_p55', ['https://gadero.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
