import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_inview.nl_zwu', ['https://www.inview.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
