import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_winparts.nl_aj7', ['https://www.winparts.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
