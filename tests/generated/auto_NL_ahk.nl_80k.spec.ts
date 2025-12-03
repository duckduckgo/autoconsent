import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_ahk.nl_80k', ['https://www.ahk.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
