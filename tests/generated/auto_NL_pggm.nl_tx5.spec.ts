import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_pggm.nl_tx5', ['https://www.pggm.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
