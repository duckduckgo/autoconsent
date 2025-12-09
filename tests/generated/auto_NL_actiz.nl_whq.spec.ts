import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_actiz.nl_whq', ['https://www.actiz.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
