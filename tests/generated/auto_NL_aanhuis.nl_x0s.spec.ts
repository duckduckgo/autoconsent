import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_aanhuis.nl_x0s', ['https://aanhuis.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
