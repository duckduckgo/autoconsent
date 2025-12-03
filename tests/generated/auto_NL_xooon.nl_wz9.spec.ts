import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_xooon.nl_wz9', ['https://www.xooon.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
