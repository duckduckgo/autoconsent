import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_blink.nl_25r', ['https://blink.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
