import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_loetje.nl_tw0', ['https://www.loetje.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
