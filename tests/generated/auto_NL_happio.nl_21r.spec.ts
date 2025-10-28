import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_happio.nl_21r', ['https://www.happio.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
