import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_l1.nl_y8b', ['https://www.l1.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
