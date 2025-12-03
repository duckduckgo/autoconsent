import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_vvaa.nl_avs', ['https://www.vvaa.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
