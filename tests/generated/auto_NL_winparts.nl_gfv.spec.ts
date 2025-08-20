import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_winparts.nl_gfv', ['https://www.winparts.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
