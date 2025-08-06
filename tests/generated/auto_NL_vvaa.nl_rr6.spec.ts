import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_vvaa.nl_rr6', ['https://www.vvaa.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
