import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_fox.nl_x7n', ['https://www.fox.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
