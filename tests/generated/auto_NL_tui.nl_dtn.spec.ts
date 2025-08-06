import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_tui.nl_dtn', ['https://www.tui.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
