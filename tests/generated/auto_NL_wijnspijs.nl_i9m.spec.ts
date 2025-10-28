import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_wijnspijs.nl_i9m', ['https://www.wijnspijs.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
