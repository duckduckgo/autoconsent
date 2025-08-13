import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_apotheek.nl_bsi', ['https://www.apotheek.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
