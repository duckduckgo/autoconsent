import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_chasse.nl_pmp', ['https://www.chasse.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
