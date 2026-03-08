import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_forena.nl_a5q', ['https://forena.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
