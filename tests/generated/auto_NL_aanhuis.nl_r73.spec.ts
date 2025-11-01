import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_aanhuis.nl_r73', ['https://aanhuis.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
