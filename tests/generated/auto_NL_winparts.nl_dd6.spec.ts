import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_winparts.nl_dd6', ['https://www.winparts.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
