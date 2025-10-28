import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_actiz.nl_b0r', ['https://www.actiz.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
