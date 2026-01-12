import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_tui.nl_6b8', ['https://www.tui.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
