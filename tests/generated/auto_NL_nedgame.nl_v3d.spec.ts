import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_nedgame.nl_v3d', ['https://www.nedgame.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
