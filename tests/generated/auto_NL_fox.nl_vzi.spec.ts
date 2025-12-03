import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_fox.nl_vzi', ['https://www.fox.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
