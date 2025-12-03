import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_nedgame.nl_sfh', ['https://www.nedgame.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
