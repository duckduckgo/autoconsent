import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_vvaa.nl_7uq', ['https://www.vvaa.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
