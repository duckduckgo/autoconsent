import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_unive.nl_hc0', ['https://www.unive.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
