import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_xooon.nl_s7t', ['https://www.xooon.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
