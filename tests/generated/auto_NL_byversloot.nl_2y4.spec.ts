import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_byversloot.nl_2y4', ['https://byversloot.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
