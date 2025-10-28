import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_plukkers.com_2cf', ['https://plukkers.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
